import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';

export default function OfficerLogin({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-[#101522]">
      <View className="items-center mt-16">
        <Image
          source={require('../assets/uk-icon.png')}
          className="w-120 h-40 mb-4"
          resizeMode="contain"
        />
      </View>

      <View className="bg-white mx-4 mt-8 rounded-2xl shadow p-6">
        <View className="flex-row mb-6">
          <TouchableOpacity
            className="flex-1 items-center pb-2"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-gray-400 font-semibold">User Login</Text>
          </TouchableOpacity>
          <View className="flex-1 items-center border-b-4 border-[#FF7A1A] pb-2">
            <Text className="text-[#FF7A1A] font-semibold">Officer Login</Text>
          </View>
        </View>

        <Text className="text-lg font-bold mb-4 text-[#222]">Officer Login</Text>

        <Text className="mb-1 text-[#222]">User ID</Text>
        <TextInput
          className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4"
          placeholder="Enter user id"
          placeholderTextColor="#A0AEC0"
        />

        <Text className="mb-1 text-[#222]">Password</Text>
        <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-2">
          <TextInput
            className="flex-1 py-3"
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor="#A0AEC0"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text className="text-gray-400 text-lg">{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Pressable className="w-4 h-4 border border-gray-400 rounded mr-2 bg-white" />
            <Text className="text-xs text-[#222]">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-xs text-[#FF7A1A] font-semibold">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-[#FF7A1A] rounded-lg py-3 mb-2 active:opacity-80">
          <Text className="text-white text-center font-bold text-base">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}