import { Inter } from 'next/font/google'
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={`${inter.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`}>
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:min-h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Hero />
              <Contact />
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24">
                <About />
                <Experience />
                <Projects />
                <Footer />
            </main>
          </div>
      </div>
  )
}
