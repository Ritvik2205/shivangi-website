interface CachedImage {
  src: string;
  dataUrl: string;
  timestamp: number;
  size: number;
}

class ImageCache {
  private memoryCache: Map<string, CachedImage> = new Map();
  private readonly CACHE_PREFIX = 'img_cache_';
  private readonly MAX_CACHE_SIZE = 50 * 1024 * 1024; // 50MB
  private readonly CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      
      cacheKeys.forEach(key => {
        const cached = localStorage.getItem(key);
        if (cached) {
          try {
            const imageData: CachedImage = JSON.parse(cached);
            // Check if cache is still valid
            if (Date.now() - imageData.timestamp < this.CACHE_EXPIRY) {
              this.memoryCache.set(imageData.src, imageData);
            } else {
              localStorage.removeItem(key);
            }
          } catch (error) {
            localStorage.removeItem(key);
          }
        }
      });
    } catch (error) {
      console.warn('Failed to load image cache from storage:', error);
    }
  }

  private saveToStorage(imageData: CachedImage): void {
    try {
      const key = this.CACHE_PREFIX + btoa(imageData.src).replace(/[^a-zA-Z0-9]/g, '');
      localStorage.setItem(key, JSON.stringify(imageData));
    } catch (error) {
      console.warn('Failed to save image to storage:', error);
    }
  }

  private cleanupCache(): void {
    // Remove expired entries from memory
    const now = Date.now();
    for (const [src, imageData] of this.memoryCache.entries()) {
      if (now - imageData.timestamp > this.CACHE_EXPIRY) {
        this.memoryCache.delete(src);
      }
    }

    // Clean up localStorage
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      
      cacheKeys.forEach(key => {
        const cached = localStorage.getItem(key);
        if (cached) {
          try {
            const imageData: CachedImage = JSON.parse(cached);
            if (now - imageData.timestamp > this.CACHE_EXPIRY) {
              localStorage.removeItem(key);
            }
          } catch (error) {
            localStorage.removeItem(key);
          }
        }
      });
    } catch (error) {
      console.warn('Failed to cleanup cache:', error);
    }
  }

  async preloadImage(src: string): Promise<string> {
    // Check memory cache first
    if (this.memoryCache.has(src)) {
      const cached = this.memoryCache.get(src)!;
      if (Date.now() - cached.timestamp < this.CACHE_EXPIRY) {
        return cached.dataUrl;
      } else {
        this.memoryCache.delete(src);
      }
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        try {
          // Create canvas to convert to data URL
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL('image/png');
            
            const imageData: CachedImage = {
              src,
              dataUrl,
              timestamp: Date.now(),
              size: dataUrl.length
            };

            // Store in memory cache
            this.memoryCache.set(src, imageData);
            
            // Store in localStorage (async)
            this.saveToStorage(imageData);
            
            resolve(dataUrl);
          } else {
            reject(new Error('Failed to create canvas context'));
          }
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    });
  }

  async preloadImages(sources: string[]): Promise<Map<string, string>> {
    const results = new Map<string, string>();
    const promises = sources.map(async (src) => {
      try {
        const dataUrl = await this.preloadImage(src);
        results.set(src, dataUrl);
        return { src, success: true, dataUrl };
      } catch (error) {
        console.warn(`Failed to preload image: ${src}`, error);
        return { src, success: false, error };
      }
    });

    await Promise.all(promises);
    this.cleanupCache();
    return results;
  }

  getCachedImage(src: string): string | null {
    const cached = this.memoryCache.get(src);
    if (cached && Date.now() - cached.timestamp < this.CACHE_EXPIRY) {
      return cached.dataUrl;
    }
    return null;
  }

  isCached(src: string): boolean {
    return this.memoryCache.has(src) && 
           Date.now() - this.memoryCache.get(src)!.timestamp < this.CACHE_EXPIRY;
  }

  clearCache(): void {
    this.memoryCache.clear();
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      cacheKeys.forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }

  getCacheStats(): { memorySize: number; storageSize: number; itemCount: number } {
    let memorySize = 0;
    let itemCount = 0;
    
    for (const imageData of this.memoryCache.values()) {
      memorySize += imageData.size;
      itemCount++;
    }

    let storageSize = 0;
    try {
      const keys = Object.keys(localStorage);
      const cacheKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      storageSize = cacheKeys.reduce((total, key) => {
        const item = localStorage.getItem(key);
        return total + (item ? item.length : 0);
      }, 0);
    } catch (error) {
      console.warn('Failed to calculate storage size:', error);
    }

    return { memorySize, storageSize, itemCount };
  }
}

// Export singleton instance
export const imageCache = new ImageCache();
export default imageCache;
