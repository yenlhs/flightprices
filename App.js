import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {
	return (
		<View className='flex-1 items-center justify-center bg-white'>
			<SearchForm />
			<StatusBar style='auto' />
		</View>
	);
}

