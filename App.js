import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import SearchForm from './src/components/SearchForm';
import dummydata from './data.json';
import FlightOptionItem from './src/components/FlightPriceOptionItem';
import { useState } from 'react';

import { searchFlights } from './src/api/searchFlights';

export default function App() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	const onSearch = async (data) => {
		// console.warn(data);
		// console.log('SearchItem', data);
		// const { to, from, departureDate, returnDate } = searchItem;
		setLoading(true);
		setItems([]);
		const response = await searchFlights(data);
		setItems(response);
		setLoading(false);
	};
	return (
		<SafeAreaView className='flex-1 bg-white'>
			<SearchForm onSearch={onSearch} />
			<FlatList data={items} renderItem={({ item }) => <FlightOptionItem flight={item} />} />
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

