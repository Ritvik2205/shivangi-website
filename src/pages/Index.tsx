import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MakeoverRoom from "@/components/MakeoverRoom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <nav className="container flex items-center justify-between h-16">
          <a href="#hero" className="font-semibold tracking-tight">Makeover Room Portfolio</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="#contact" className="md:inline-flex hidden"><Button>Book Now</Button></a>
        </nav>
      </header>

      <main>
        <section id="hero" className="container py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Makeover Room Portfolio</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explore my work by clicking items in the room. Each element reveals a part of my story—services, projects, and more.
              </p>
              <div className="flex gap-3">
                <a href="#gallery"><Button className="">Explore Gallery</Button></a>
                <a href="#contact"><Button variant="secondary">Contact</Button></a>
              </div>
            </div>
            <div className="gradient-primary rounded-xl p-1 animate-float">
              <MakeoverRoom />
            </div>
          </div>
        </section>

        <section id="about" className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>The story behind the looks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I craft polished, camera-ready styles with a love for detail. My process blends creativity and precision to
                  deliver looks that feel effortlessly you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle id="skills">Skills</CardTitle>
                <CardDescription>Techniques & specialities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li>Bridal styling</li>
                  <li>Editorial makeup</li>
                  <li>Hair updos</li>
                  <li>Color matching</li>
                  <li>Wardrobe curation</li>
                  <li>Photo-ready finishes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="gallery" className="container py-16 md:py-24">
          <Card>
            <CardHeader>
              <CardTitle>Gallery</CardTitle>
              <CardDescription>Selected transformations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-muted" />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="services" className="container py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Bridal Package', desc: 'Trial, day-of styling & touch-ups.' },
              { title: 'Editorial Shoot', desc: 'On-set looks, cohesive styling.' },
              { title: 'Personal Consult', desc: '1:1 session tailored to you.' },
            ].map((s) => (
              <Card key={s.title} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary">Request Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="container py-16 md:py-24">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Recent collaborations and highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>Fashion Week runway looks with modern romantic tones.</p>
                <p>Magazine editorial series focusing on soft glam.</p>
                <p>Brand campaign featuring timeless bridal elegance.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="testimonials" className="container py-16 md:py-24">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
              <CardDescription>Kind words from clients</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-muted-foreground">“Absolutely flawless — I felt like myself, just elevated.”</blockquote>
            </CardContent>
          </Card>
        </section>

        <section id="blog" className="container py-16 md:py-24">
          <Card>
            <CardHeader>
              <CardTitle>Blog</CardTitle>
              <CardDescription>Tips, trends and behind the scenes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="p-4 rounded-lg border bg-card text-card-foreground">
                    <div className="h-24 rounded-md bg-muted mb-3" />
                    <p className="font-medium">How I build long-lasting looks</p>
                    <p className="text-sm text-muted-foreground">A quick peek into products and prep.</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="container py-16 md:py-24">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>Bookings and inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Tell me about your event and desired style. I’ll reply within 24 hours.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@example.com"><Button>Email Me</Button></a>
                <a href="#services"><Button variant="secondary">View Packages</Button></a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Makeover Room Portfolio</p>
          <nav className="flex gap-4">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
