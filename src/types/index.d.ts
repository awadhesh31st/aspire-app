type CardType = 'debit' | 'company'

type ApiResponse<T> = {
  success: boolean
  data: T
  message?: string
}

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
  isFrozen: boolean
  customerId: string
  customerName: string
  type: CardType
  number: string
  expirationDate: string
  cvv: string
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
  handleActiveCard: (cardId: number) => void
}

type Carousel = {
  items: unknown[]
  children: React.ReactNode
  setCurrentCard?: (cardId: number) => void
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

type TransactionCategoryValue = {
  bgcolor: string
  txtColor: string
  icon: IconType
}

type TransactionCategoryType = 'travel' | 'advancement' | 'shopping'

type TransactionCategory = Record<
  TransactionCategoryType,
  TransactionCategoryValue
>

type RecentTransactionDetail = {
  transactionName: string
  transactionType: 'credit' | 'debit'
  transactionDate: string
  transactionStatus: string
  transactionCategory: TransactionCategoryType
  transactionAmount: string
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

type CommonIcon = {
  up: IconType
  down: IconType
  card: IconType
  forward: IconType
  visa: IconType
  logo: string
}

type CardComponentProps = {
  activeTab: CardType
  setActiveTab: (card: CardType) => void
}

type PaymentDetailComponentProps = {
  activeCard: PaymentCard
}

type RecentTransactionProps = {
  activeCard: string
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (name: string) => void
  isLoading: boolean
}

type HeaderComponentProps = {
  openModal: () => void
}

type PaymentActionProps = {
  activeCard: PaymentCard
  toggleFreeze: (cardId: string) => void
}
