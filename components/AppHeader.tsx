import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  EditProfile: undefined;
};

export default function AppHeader() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-row items-center bg-white px-4 pb-4 pt-5 shadow">
      <Image source={require('../assets/uk-logo.png')} className="h-12 w-12" />
      <View className="ml-3 flex-1">
        <Text className="text-lg font-extrabold text-zinc-800">E-GATEPASS PORTAL</Text>
        <Text className="text-sm text-zinc-600">Personal Secretary</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          className="h-10 w-10 rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
} 