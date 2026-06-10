import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Templates from '@/components/Templates'
import Systems from '@/components/Systems'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Templates />
      <Systems />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
