import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Button } from 'react-native';

export default function Login({ navigation }: any) {
  const [showMpin, setShowMpin] = useState(false);

  return (
    <View className="flex-1 bg-[#101522]">
      <View className="mt-16 items-center">
        <Image
          source={require('../assets/uk-icon.png')}
          className="w-120 mb-4 h-40"
          resizeMode="contain"
        />
      </View>

      <View className="mx-4 mt-8 rounded-2xl bg-white p-6 shadow">
        <View className="mb-6 flex-row">
          <View className="flex-1 items-center border-b-4 border-[#FF7A1A] pb-2">
            <Text className="font-semibold text-[#FF7A1A]">User Login</Text>
          </View>
          <TouchableOpacity
            className="flex-1 items-center pb-2"
            onPress={() => navigation.navigate('OfficerLogin')}>
            <Text className="font-semibold text-gray-400">Officer Login</Text>
          </TouchableOpacity>
        </View>

        <Text className="mb-4 text-lg font-bold text-[#222]">User Login</Text>

        <Text className="mb-1 text-[#222]">Mobile Number</Text>
        <TextInput
          className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor="#A0AEC0"
        />

        <Text className="mb-1 text-[#222]">MPIN</Text>
        <View className="mb-2 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
          <TextInput
            className="flex-1 py-3"
            placeholder="Enter MPIN"
            secureTextEntry={!showMpin}
            keyboardType="number-pad"
            placeholderTextColor="#A0AEC0"
          />
          <TouchableOpacity onPress={() => setShowMpin(!showMpin)}>
            <Text className="text-lg text-gray-400">{showMpin ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-6 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Pressable className="mr-2 h-4 w-4 rounded border border-gray-400 bg-white" />
            <Text className="text-xs text-[#222]">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-xs font-semibold text-[#FF7A1A]">Forgot MPIN?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mb-2 rounded-lg bg-[#FF7A1A] py-3 active:opacity-80">
          <Button title="Submit" onPress={() => navigation.navigate('UserDashboard')} />
        </TouchableOpacity>
      </View>

      <View className="mt-16 items-center">
        <Text className="text-base text-white">
          Don't have an account?
          <Text
            className="pl-8 font-semibold text-[#FF7A1A]"
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register here
          </Text>
        </Text>
      </View>
    </View>
  );
}
