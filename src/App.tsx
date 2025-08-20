import { HeaderComponent, NavigationComponent } from './components'
import CardComponent from './components/Card'

const App = () => {
  return (
    <main className="flex h-screen w-screen flex-col gap-5 bg-brand-dark-navy text-neutral-white md:flex-row md:bg-white">
      <HeaderComponent />
      <CardComponent />
      <NavigationComponent />
    </main>
  )
}

export default App
