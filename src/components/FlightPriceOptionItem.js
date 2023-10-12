import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlightOptionItem = ({ flight }) => {
	return (
		<View className='flex flex-row items-center border border-gray-100 p-4 m-1 rounded-lg'>
			<View className='flex-1 border-r-2 border-gray-300 gap-1'>
				<View className='flex flex-row justify-between pr-2'>
					<Text className='font-medium text-gray-700'>
						{`${flight.from.departAt}  `} <Ionicons name='airplane' size={16} color='gray' /> {`  ${flight.from.arriveAt}`}
					</Text>
					<Text className='text-gray-500'>{flight.from.airline}</Text>
				</View>

				<View className='flex flex-row justify-between pr-2'>
					<Text className='font-medium text-gray-600'>
						{`${flight.to.departAt}  `} <Ionicons name='airplane' size={16} color='gray' /> {`  ${flight.to.arriveAt}`}
					</Text>
					<Text className='text-gray-500'>{flight.to.airline}</Text>
				</View>
			</View>
			<Text className='font-bold w-20 text-xl text-center'>{flight.price}</Text>
		</View>
	);
};

export default FlightOptionItem;
