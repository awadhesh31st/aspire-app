import {
  HeaderComponent,
  NavigationComponent,
  CardComponent,
  PaymentDetailComponent,
} from './components'

const App = () => {
  return (
    <main className="flex h-screen w-screen flex-col gap-5 bg-brand-dark-navy text-neutral-white md:flex-row md:bg-white">
      <div className="sticky top-0 flex flex-col gap-5">
        <HeaderComponent />
        <CardComponent />
      </div>
      <div className="z-40 h-full">
        <PaymentDetailComponent />
      </div>
      <NavigationComponent />
    </main>
  )
}

export default App
