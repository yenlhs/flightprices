import dayjs from 'dayjs';

const apiUrl = 'http://localhost:3000';

export async function searchFlights({ from, to, departureDate, returnDate }) {
	const formattedDepartureDate = dayjs(departureDate).format('YYMMDD');
	const formattedReturnDate = dayjs(returnDate).format('YYMMDD');
	// console.log('[FormattedDates]', formattedDepartureDate);
	let data = [];
	try {
		const response = await fetch(`${apiUrl}/search?from=${from}&to=${to}&departDate=${formattedDepartureDate}&returnDate=${formattedReturnDate}&`);
		console.log('[response]', response);
		data = await response.json();
		// console.log('[data]', data);
	} catch (e) {
		console.log('Error getting data');
	}
	return data;
}
