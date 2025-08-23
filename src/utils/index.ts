export const convertDate = (dateStr: string) => {
  const date = new Date(dateStr)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}
