import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Register({ navigation }: any) {
  const [showMpin, setShowMpin] = useState(false);
  const [showConfirmMpin, setShowConfirmMpin] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [mpin, setMpin] = useState('');
  const [confirmMpin, setConfirmMpin] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    mobile?: string;
    otp?: string;
    mpin?: string;
    confirmMpin?: string;
    identityNumber?: string;
    photo?: string;
  }>({});

  const validate = () => {
    let valid = true;
    let errs: typeof errors = {};

    if (!fullName.trim()) {
      errs.fullName = 'Full Name is required';
      valid = false;
    }

    if (!email) {
      errs.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Enter a valid email';
      valid = false;
    }

    if (!mobile) {
      errs.mobile = 'Mobile number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errs.mobile = 'Enter a valid 10 digit mobile number';
      valid = false;
    }

    if (!otp) {
      errs.otp = 'OTP is required';
      valid = false;
    } else if (otp.length !== 4) {
      errs.otp = 'OTP must be 4 digits';
      valid = false;
    }

    if (!mpin) {
      errs.mpin = 'MPIN is required';
      valid = false;
    } else if (!/^\d{4,6}$/.test(mpin)) {
      errs.mpin = 'MPIN must be 4 or 6 digits';
      valid = false;
    }

    if (!confirmMpin) {
      errs.confirmMpin = 'Confirm MPIN is required';
      valid = false;
    } else if (mpin !== confirmMpin) {
      errs.confirmMpin = 'MPINs do not match';
      valid = false;
    }

    if (!identityNumber.trim()) {
      errs.identityNumber = 'Identity Proof Number is required';
      valid = false;
    }

    if (!photo) {
      errs.photo = 'Photo is required';
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Success', 'Form submitted successfully!');
      navigation.navigate('UserDashboard'); // ✅ Change accordingly
    }
  };

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

      <Text className="mb-1 text-[#222]">Full Name</Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
        placeholder="Enter your Name"
        placeholderTextColor="#A0AEC0"
      />
      {errors.fullName && <Text className="text-xs text-red-500 mb-2">{errors.fullName}</Text>}

      <Text className="mb-1 text-[#222]">Email ID</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
        placeholder="Enter your email id"
        placeholderTextColor="#A0AEC0"
        keyboardType="email-address"
      />
      {errors.email && <Text className="text-xs text-red-500 mb-2">{errors.email}</Text>}

      <Text className="mb-1 text-[#222]">Mobile Number</Text>
      <TextInput
        value={mobile}
        onChangeText={setMobile}
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
        placeholder="Enter Mobile Number"
        placeholderTextColor="#A0AEC0"
        keyboardType="phone-pad"
        maxLength={10}
      />
      {errors.mobile && <Text className="text-xs text-red-500 mb-2">{errors.mobile}</Text>}

      <Text className="mb-1 text-[#222]">OTP</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
        placeholder="Enter OTP"
        placeholderTextColor="#A0AEC0"
        keyboardType="number-pad"
        maxLength={4}
      />
      {errors.otp && <Text className="text-xs text-red-500 mb-2">{errors.otp}</Text>}

      <Text className="mb-1 text-[#222]">Create MPIN</Text>
      <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-1">
        <TextInput
          value={mpin}
          onChangeText={setMpin}
          className="flex-1 py-3"
          placeholder="Enter MPIN"
          secureTextEntry={!showMpin}
          keyboardType="number-pad"
          placeholderTextColor="#A0AEC0"
          maxLength={6}
        />
        <TouchableOpacity onPress={() => setShowMpin(!showMpin)}>
          <Ionicons name={showMpin ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0AEC0" />
        </TouchableOpacity>
      </View>
      {errors.mpin && <Text className="text-xs text-red-500 mb-2">{errors.mpin}</Text>}

      <Text className="mb-1 text-[#222]">Confirm MPIN</Text>
      <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-1">
        <TextInput
          value={confirmMpin}
          onChangeText={setConfirmMpin}
          className="flex-1 py-3"
          placeholder="Confirm MPIN"
          secureTextEntry={!showConfirmMpin}
          keyboardType="number-pad"
          placeholderTextColor="#A0AEC0"
          maxLength={6}
        />
        <TouchableOpacity onPress={() => setShowConfirmMpin(!showConfirmMpin)}>
          <Ionicons name={showConfirmMpin ? 'eye-off-outline' : 'eye-outline'} size={20} color="#A0AEC0" />
        </TouchableOpacity>
      </View>
      {errors.confirmMpin && <Text className="text-xs text-red-500 mb-2">{errors.confirmMpin}</Text>}

=      <Text className="mb-1 text-[#222]">Identity Proof Number</Text>
      <TextInput
        value={identityNumber}
        onChangeText={setIdentityNumber}
        className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
        placeholder="Identity Proof Number"
        placeholderTextColor="#A0AEC0"
      />
      {errors.identityNumber && <Text className="text-xs text-red-500 mb-2">{errors.identityNumber}</Text>}

      <Text className="mb-1 text-[#222]">Upload Photo</Text>
      <TouchableOpacity
        className="border border-dashed border-[#FF7A1A] rounded-lg bg-[#F7F9FB] px-4 py-6 mb-2 items-center"
        onPress={pickImage}
        activeOpacity={0.7}
      >
        {photo ? (
          <Image source={{ uri: photo }} className="w-24 h-24 rounded mb-2" />
        ) : (
          <>
            <Ionicons name="image-outline" size={32} color="#A0AEC0" />
            <Text className="text-[#FF7A1A] font-semibold mt-2">Upload a file or drag and drop</Text>
          </>
        )}
      </TouchableOpacity>
      {errors.photo && <Text className="text-xs text-red-500 mb-2">{errors.photo}</Text>}

      <TouchableOpacity
        className="bg-[#FF7A1A] rounded-lg py-3 mb-2 active:opacity-80"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-bold text-base">Submit</Text>
      </TouchableOpacity>

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