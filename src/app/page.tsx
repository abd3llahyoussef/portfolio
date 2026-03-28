import { Background } from "@/components/ui/Background";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 glass rounded-2xl border-white/5">
          <div className="text-xl font-bold tracking-tighter">
            AY<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="px-5 py-2 glass bg-white/5 hover:bg-white/10 rounded-full text-sm font-semibold transition-colors">Contact Me</a>
          </div>
        </nav>
      </header>

      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />

        {/* Contact CTA */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass p-12 text-center rounded-[2rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 blur-[100px] -z-10" />

            <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-lg mx-auto">
              I'm always open to new opportunities and creative collaborations.
              Feel free to reach out for projects or a friendly chat!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:abdallahjoseph362@gmail.com" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold glow-sm hover:glow-md transition-all">
                Send an Email
              </a>
              <a href="https://www.linkedin.com/in/abdallah-youssef-578759207" target="_blank" className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold transition-all">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t border-white/5 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Abdallah Youssef. All rights reserved.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest opacity-50">Built with Next.js & Tailwind 4</p>
        </footer>
      </div>
    </main>
  );
}
