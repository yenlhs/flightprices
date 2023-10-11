import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

const SearchForm = () => {
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');

	const [departureDate, setDepartureDate] = useState(new Date());
	const [returnDate, setReturnDate] = useState(new Date());

	const onSearchPress = () => {
		console.log('Searching...');
	};
	return (
		<SafeAreaView className='flex-1'>
			<View className='shadow-md bg-white rounded-md p-4 gap-2'>
				<Text className='self-center font-semibold'>Search the best prices for you next trip!</Text>
				<TextInput placeholder='From' value={from} onChangeText={setFrom} className='border border-slate-200 p-2 rounded-md' />
				<TextInput placeholder='To' value={to} onChangeText={setTo} className='border border-slate-200 p-2 rounded-md' />

				<View className='flex flex-row border border-slate-200 items-center p-2 rounded-md'>
					<Feather name='calendar' size={24} color='gray' />
					<DateTimePicker value={departureDate} onChange={(event, date) => setDepartureDate(date)} minimumDate={new Date()} />
					<DateTimePicker value={returnDate} onChange={(event, date) => setReturnDate(date)} minimumDate={departureDate} />
				</View>
				<Pressable className='self-center p-2' onPress={onSearchPress}>
					<Text>Search</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default SearchForm;
