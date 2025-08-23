import { card } from '../content'
import {
  generateCardNumber,
  generateCvvNumber,
  generateExpirationDate,
} from '../utils'

export const initializeDefaultCards = (cardType: CardType) => {
  const defaultCards: PaymentCard[] = card[cardType].cards

  if (!localStorage.getItem('creditCards')) {
    localStorage.setItem('creditCards', JSON.stringify(defaultCards))
  }
}

export const cardAPI = {
  getAllCards: (): Promise<ApiResponse<PaymentCard[]>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cards = JSON.parse(localStorage.getItem('creditCards') || '[]')
        resolve({ success: true, data: cards })
      }, 100)
    })
  },

  createCard: (name: string): Promise<ApiResponse<PaymentCard>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newCard: PaymentCard = {
          customerId: `cust_${Date.now().toString()}`,
          customerName: name,
          type: 'debit',
          number: generateCardNumber(),
          expirationDate: generateExpirationDate(),
          cvv: generateCvvNumber().toString(),
          isFrozen: false,
        }

        const existingCards = JSON.parse(
          localStorage.getItem('creditCards') || '[]'
        )
        const updatedCards = [...existingCards, newCard]
        localStorage.setItem('creditCards', JSON.stringify(updatedCards))

        resolve({ success: true, data: newCard })
      }, 200)
    })
  },

  updateCard: (
    id: string,
    updates: Partial<PaymentCard>
  ): Promise<ApiResponse<PaymentCard>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cards = JSON.parse(localStorage.getItem('creditCards') || '[]')
        const cardIndex = cards.findIndex(
          (card: PaymentCard) => card.customerId === id
        )

        if (cardIndex !== -1) {
          cards[cardIndex] = { ...cards[cardIndex], ...updates }
          localStorage.setItem('creditCards', JSON.stringify(cards))
          resolve({ success: true, data: cards[cardIndex] })
        } else {
          resolve({
            success: false,
            data: null as any,
            message: 'Card not found',
          })
        }
      }, 100)
    })
  },
}
