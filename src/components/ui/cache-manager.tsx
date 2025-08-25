import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Info, RefreshCw } from "lucide-react";
import { imageCache } from "@/utils/imageCache";

interface CacheStats {
  memorySize: number;
  storageSize: number;
  itemCount: number;
}

const CacheManager: React.FC = () => {
  const [stats, setStats] = useState<CacheStats>({ memorySize: 0, storageSize: 0, itemCount: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const updateStats = () => {
    setStats(imageCache.getCacheStats());
  };

  useEffect(() => {
    updateStats();
    // Update stats every 5 seconds
    const interval = setInterval(updateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const clearCache = () => {
    imageCache.clearCache();
    updateStats();
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(true)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <Info className="h-4 w-4 mr-2" />
          Cache Info
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 w-80">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">Image Cache</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 p-0"
        >
          ×
        </Button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Cached Images:</span>
          <span className="font-medium">{stats.itemCount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Memory Usage:</span>
          <span className="font-medium">{formatBytes(stats.memorySize)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Storage Usage:</span>
          <span className="font-medium">{formatBytes(stats.storageSize)}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={updateStats}
          className="flex-1"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={clearCache}
          className="flex-1"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear Cache
        </Button>
      </div>
    </div>
  );
};

export default CacheManager;
