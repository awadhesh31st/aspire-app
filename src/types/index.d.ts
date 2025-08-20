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
  isCardActive?: boolean
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
  setCurrentCard: (cardId: number) => void
}

type CarouselDots = {
  total: number
  current: number
  onDotClick: (index: number) => void
}

type PaymentCardHandle = {
  toggleCardNumber: () => void
}

type PaymentDetailAction = {
  title: string
  icon: IconType
}

type CardDetail = {
  title: string
  icon: IconType
  detail: PaymentCard
}

type RecentTransactionDetail = {
  transactionName: string
  transactionType: 'credit' | 'debit'
  transactionDate: string
  transactionStatus: string
  transactionStatusIcon: IconType
  transactionIcon: IconType
}

type RecentTransaction = {
  title: string
  icon: IconType
  transactionList: RecentTransactionDetail[]
}

type PaymentDetail = {
  action: PaymentDetailAction[]
  cardDetail: CardDetail
  recentTransaction: RecentTransaction
}
