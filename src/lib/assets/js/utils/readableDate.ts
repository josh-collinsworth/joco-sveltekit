const months: string[] = [
  null, // January should be 1, not 0, etc.
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const readableDate = (date: string): string => {
  const splitDate = date.split('-')

  const month = months[splitDate[1]]
  const day = parseInt(splitDate[2])
  const year = splitDate[0]

  return `${month} ${day}, ${year}`
}

export default readableDate