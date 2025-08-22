import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function Register({ navigation }: any) {
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-10" contentContainerStyle={{ paddingBottom: 32 }}>
      <Text className="text-xl font-bold mb-6">Register</Text>

      {/* Full Name */}
      <Text className="mb-1 text-[#222]">Full Name</Text>
      <TextInput
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4"
        placeholder="Enter your Name"
        placeholderTextColor="#A0AEC0"
      />

      {/* Email */}
      <Text className="mb-1 text-[#222]">Email ID</Text>
      <TextInput
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4"
        placeholder="Enter your email id"
        placeholderTextColor="#A0AEC0"
        keyboardType="email-address"
      />

      {/* Mobile Number + Send OTP */}
      <Text className="mb-1 text-[#222]">Mobile Number</Text>
      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
          placeholder="Enter Mobile Number"
          placeholderTextColor="#A0AEC0"
          keyboardType="phone-pad"
        />
        <TouchableOpacity>
          <Text className="ml-2 text-[#FF7A1A] font-semibold">Send OTP</Text>
        </TouchableOpacity>
      </View>

      {/* OTP + Verify */}
      <Text className="mb-1 text-[#222]">OTP</Text>
      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
          placeholder="Enter OTP"
          placeholderTextColor="#A0AEC0"
          keyboardType="number-pad"
        />
        <TouchableOpacity>
          <Text className="ml-2 text-[#FF7A1A] font-semibold">Verify</Text>
        </TouchableOpacity>
      </View>

      {/* Create MPIN */}
      <Text className="mb-1 text-[#222]">Create MPIN</Text>
      <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-4">
        <TextInput
          className="flex-1 py-3"
          placeholder="Enter MPIN"
          secureTextEntry={!showMpin}
          keyboardType="number-pad"
          placeholderTextColor="#A0AEC0"
        />
        <TouchableOpacity onPress={() => setShowMpin(!showMpin)}>
          <Ionicons name={showMpin ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0AEC0" />
        </TouchableOpacity>
      </View>

      {/* Confirm MPIN */}
      <Text className="mb-1 text-[#222]">Confirm MPIN</Text>
      <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-4">
        <TextInput
          className="flex-1 py-3"
          placeholder="Confirm MPIN"
          secureTextEntry={!showConfirmMpin}
          keyboardType="number-pad"
          placeholderTextColor="#A0AEC0"
        />
        <TouchableOpacity onPress={() => setShowConfirmMpin(!showConfirmMpin)}>
          <Ionicons name={showConfirmMpin ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0AEC0" />
        </TouchableOpacity>
      </View>

      {/* Select Gender */}
      <Text className="mb-1 text-[#222]">Select Gender</Text>
      <View className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4 flex-row items-center justify-between">
        <Text className="text-[#A0AEC0]">Select Gender</Text>
        <Ionicons name="chevron-down-outline" size={18} color="#A0AEC0" />
      </View>

      {/* Identity Proof */}
      <Text className="mb-1 text-[#222]">Identity Proof</Text>
      <View className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4 flex-row items-center justify-between">
        <Text className="text-[#A0AEC0]">Select Gender</Text>
        <Ionicons name="chevron-down-outline" size={18} color="#A0AEC0" />
      </View>

      {/* Identity Proof Number */}
      <Text className="mb-1 text-[#222]">Identity Proof Number</Text>
      <TextInput
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3 mb-4"
        placeholder="Identity Proof Number"
        placeholderTextColor="#A0AEC0"
      />

      {/* Upload Photo */}
     <Text className="mb-1 text-[#222]">Upload Photo</Text>
      <TouchableOpacity
        className="border border-dashed border-[#FF7A1A] rounded-lg bg-[#F7F9FB] px-4 py-6 mb-6 items-center"
        onPress={pickImage}
        activeOpacity={0.7}
      >
        {photo ? (
          <Image source={{ uri: photo }} className="w-24 h-24 rounded mb-2" />
        ) : (
          <>
            <Ionicons name="image-outline" size={32} color="#A0AEC0" />
            <Text className="text-[#FF7A1A] font-semibold mt-2">Upload a file or drag and drop</Text>
            <Text className="text-xs text-[#A0AEC0]">PNG, JPG, GIF up to 10MB</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity className="bg-[#FF7A1A] rounded-lg py-3 mb-2 active:opacity-80">
        <Text className="text-white text-center font-bold text-base">Submit</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View className="items-center mt-2 mb-6">
        <Text className="text-base text-[#222]">
          I have an account?{' '}
          <Text
            className="text-[#FF7A1A] font-semibold"
            onPress={() => navigation.navigate('Login')}
          >
            Log in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}