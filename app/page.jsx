import { About } from '@/components/about'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="max-w-lg mx-auto mt-8 xl:mt-16">
      <Header />
      <About />
    </div>
  )
}
