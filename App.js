import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import SearchForm from './src/components/SearchForm';
import dummydata from './data.json';
import FlightOptionItem from './src/components/FlightPriceOptionItem';
import { useState } from 'react';

export default function App() {
	const [items, setItems] = useState([]);

	const onSearch = (data) => {
		console.warn(data);
		setItems(dummydata);
	};
	return (
		<SafeAreaView className='flex-1 bg-white'>
			<SearchForm onSearch={onSearch} />
			{/* <FlightOptionItem flight={item} /> */}

			<FlatList data={items} renderItem={({ item }) => <FlightOptionItem flight={item} />} />
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

