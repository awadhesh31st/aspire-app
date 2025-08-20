type CardType = 'debit' | 'company'

type Tab = {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

type Navigation = {
  title: string
  path: string
  icon?: string | IconType
}

type Header = {
  title: string
  logo: string
  balance: {
    currency: string
    amount: string
  }
  addCardButton: {
    text: string
    icon: IconType
  }
}

type PaymentCard = {
  customerId: string
  customerName: string
  type: CardType
  number: string
  expirationDate: string
  cvv: string
  cardProvider: IconType
  cardVander: string
}

type CardDetails = {
  title: string
  cards: PaymentCard[]
}

type CardAction = {
  showTitle: string
  hideTitle: string
  iconOn: IconType
  iconOff: IconType
}

type Card = {
  debit: CardDetails
  company: CardDetails
}

type CardList = {
  cards: PaymentCard[]
}

type Carousel = {
  items: unknown[]
  children: React.ReactNode
}

type CarouselDots = {
  total: number
  current: number
  onDotClick: (index: number) => void
}
