import { aspireGreenLogo, aspireLogo } from '../assets'
import { BsCreditCardFill } from 'react-icons/bs'
import { FaUser, FaArrowCircleUp } from 'react-icons/fa'
import { BiTransferAlt } from 'react-icons/bi'
import { RiAddCircleFill } from 'react-icons/ri'
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5'
import { SiVisa } from 'react-icons/si'
import { FaRegSnowflake } from 'react-icons/fa'
import { ImMeter2 } from 'react-icons/im'
import { IoMdRefreshCircle } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { FaBoxArchive } from 'react-icons/fa6'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoCard } from 'react-icons/io5'
import { BiDetail } from 'react-icons/bi'
import { GrTransaction } from 'react-icons/gr'

export const navigation: Navigation[] = [
  { title: 'Home', path: '/', icon: aspireGreenLogo },
  { title: 'Cards', path: '/cards', icon: BsCreditCardFill },
  { title: 'Payments', path: '/payments', icon: BiTransferAlt },
  { title: 'Credit', path: '/credit', icon: FaArrowCircleUp },
  { title: 'Profile', path: '/profile', icon: FaUser },
]

export const header: Header = {
  title: 'Account balance',
  logo: aspireGreenLogo,
  balance: {
    currency: 'S$',
    amount: '3,000',
  },
  addCardButton: {
    text: 'New card',
    icon: RiAddCircleFill,
  },
}

export const card: Card = {
  debit: {
    title: 'My debit cards',
    cards: [
      {
        customerId: 'cust_123',
        customerName: 'John Doe',
        type: 'debit',
        number: '3432 1234 5678 9010',
        expirationDate: '12/25',
        cvv: '123',
        cardProvider: SiVisa,
        cardVander: aspireLogo,
      },
      {
        customerId: 'cust_124',
        customerName: 'Jane Smith',
        type: 'debit',
        number: '5567 8901 2345 6789',
        expirationDate: '06/26',
        cvv: '456',
        cardProvider: SiVisa,
        cardVander: aspireLogo,
      },
      {
        customerId: 'cust_125',
        customerName: 'David Johnson',
        type: 'debit',
        number: '3782 822463 10005',
        expirationDate: '09/24',
        cvv: '789',
        cardProvider: SiVisa,
        cardVander: aspireLogo,
      },
    ],
  },
  company: {
    title: 'All company cards',
    cards: [
      {
        customerId: 'cust_456',
        customerName: 'Jane Smith',
        type: 'company',
        number: '5432 1234 5678 9330',
        expirationDate: '11/24',
        cvv: '456',
        cardProvider: SiVisa,
        cardVander: aspireLogo,
      },
    ],
  },
}

export const cardAction: CardAction = {
  showTitle: 'Show card number',
  hideTitle: 'Hide card number',
  iconOn: IoEyeSharp,
  iconOff: IoEyeOff,
}

export const paymentDetail: PaymentDetail = {
  action: [
    {
      title: 'Freeze card',
      icon: FaRegSnowflake,
    },
    {
      title: 'Set spend limit',
      icon: ImMeter2,
    },
    {
      title: 'Add to GPay',
      icon: FcGoogle,
    },
    {
      title: 'Replace card',
      icon: IoMdRefreshCircle,
    },
    {
      title: 'Cancel card',
      icon: MdDelete,
    },
  ],
  cardDetail: {
    title: 'Card details',
    icon: BiDetail,
    detail: {
      customerId: 'cust_123',
      customerName: 'John Doe',
      type: 'debit',
      number: '3432 1234 5678 9010',
      expirationDate: '12/25',
      cvv: '123',
      cardProvider: 'Visa',
      cardVander: 'Aspire',
    },
  },
  recentTransaction: {
    title: 'Recent transactions',
    icon: GrTransaction,
    transactionList: [
      {
        transactionName: 'Hamleys',
        transactionType: 'credit',
        transactionDate: '2020-05-20T00:00:00Z',
        transactionStatus: 'Refund on debit card',
        transactionStatusIcon: IoCard,
        transactionIcon: FaBoxArchive,
      },
      {
        transactionName: 'Hamleys',
        transactionType: 'debit',
        transactionDate: '2020-05-20T00:00:00Z',
        transactionStatus: 'Charged to debit card',
        transactionStatusIcon: IoCard,
        transactionIcon: BiSolidPlaneAlt,
      },
      {
        transactionName: 'Hamleys',
        transactionType: 'debit',
        transactionDate: '2020-05-20T00:00:00Z',
        transactionStatus: 'Charged to debit card',
        transactionStatusIcon: IoCard,
        transactionIcon: HiSpeakerphone,
      },
      {
        transactionName: 'Hamleys',
        transactionType: 'debit',
        transactionDate: '2020-05-20T00:00:00Z',
        transactionStatus: 'Charged to debit card',
        transactionStatusIcon: IoCard,
        transactionIcon: FaBoxArchive,
      },
    ],
  },
}
