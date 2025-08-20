import { aspireGreenLogo, aspireLogo } from '../assets'
import { BsCreditCardFill } from 'react-icons/bs'
import { FaUser, FaArrowCircleUp } from 'react-icons/fa'
import { BiTransferAlt, BiLogoMastercard } from 'react-icons/bi'
import { RiAddCircleFill } from 'react-icons/ri'
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5'
import { SiVisa } from 'react-icons/si'

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
        cardProvider: BiLogoMastercard,
        cardVander: aspireLogo,
      },
      {
        customerId: 'cust_125',
        customerName: 'David Johnson',
        type: 'debit',
        number: '3782 822463 10005',
        expirationDate: '09/24',
        cvv: '789',
        cardProvider: BiLogoMastercard,
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
        cardProvider: BiLogoMastercard,
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
