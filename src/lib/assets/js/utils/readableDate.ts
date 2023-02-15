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
	if (!date) return date

	const splitDate = date.split('-')

	const month: string = months[parseInt(splitDate[1])]
	const day: number = parseInt(splitDate[2])
	const year: string = splitDate[0]

	return `${month} ${day}, ${year}`
}

export default readableDate