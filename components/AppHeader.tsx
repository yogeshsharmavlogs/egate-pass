import { View, Text, Image } from 'react-native';

export default function AppHeader() {
  return (
    <View className="flex-row items-center bg-white px-4 pb-4 pt-10 shadow">
      <Image source={require('../assets/uk-logo.png')} className="h-10 w-10" />
      <View className="ml-3 flex-1">
        <Text className="text-lg font-bold text-[#222]">E-GATEPASS PORTAL</Text>
        <Text className="text-xs text-gray-400">Personal Secretary</Text>
      </View>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
        className="h-10 w-10 rounded-full"
      />
    </View>
  );
}
