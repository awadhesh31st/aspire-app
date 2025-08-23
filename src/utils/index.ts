export const convertDate = (dateStr: string) => {
  const date = new Date(dateStr)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

export const generateCardNumber = (): string => {
  const segments = []
  for (let i = 0; i < 4; i++) {
    segments.push(Math.floor(1000 + Math.random() * 9000).toString())
  }
  return segments.join(' ')
}

export const generateExpirationDate = (): string => {
  const currentYear = new Date().getFullYear() % 100
  const year = currentYear + Math.floor(Math.random() * 5) + 1
  const month = Math.floor(Math.random() * 12) + 1
  return `${month.toString().padStart(2, '0')}/${year}`
}

export const generateCvvNumber = (): number => {
  return Math.floor(Math.random() * 900) + 100
}

export const getRandomTransactions = <T>(list: T[]): T[] => {
  if (list.length === 0) return []
  const count = Math.min(list.length, Math.floor(Math.random() * 4) + 1)
  const shuffled = [...list].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
