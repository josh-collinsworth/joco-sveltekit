export default interface RSSResponse {
	status: number
	body: string
	headers: {
		'Cache-Control': string
		'Content-Type': string
	}
}