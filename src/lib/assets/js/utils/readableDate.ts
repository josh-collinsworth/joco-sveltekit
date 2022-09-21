const readableDate = (date: string): string => {
  return !date ? date : new Date(`${date}T00:00:00`).toLocaleString('en-US', {
    'timeZone': 'UTC',
    'month': 'long',
    'year': 'numeric',
    'day': 'numeric'
  })
}

export default readableDate
