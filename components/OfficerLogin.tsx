import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

export default function OfficerLogin({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({});

  const validate = () => {
    let valid = true;
    let errs: { userId?: string; password?: string } = {};

    if (!userId) {
      errs.userId = 'User ID is required';
      valid = false;
    } else if (userId.length < 4) {
      errs.userId = 'User ID must be at least 4 characters';
      valid = false;
    }

    if (!password) {
      errs.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigation.navigate('OfficerDashboard');
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#101522]"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center mt-16">
          <Image
            source={require('../assets/uk-icon.png')}
            className="w-full h-40 mb-4"
            resizeMode="cover"
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
            className="bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 py-3"
            placeholder="Enter user id"
            placeholderTextColor="#A0AEC0"
            value={userId}
            onChangeText={setUserId}
          />
          {errors.userId && (
            <Text className="text-xs text-red-500 mb-2">{errors.userId}</Text>
          )}

          <Text className="mb-1 text-[#222]">Password</Text>
          <View className="flex-row items-center bg-[#F7F9FB] border border-[#E5E7EB] rounded-lg px-4 mb-1">
            <TextInput
              className="flex-1 py-3"
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#A0AEC0"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text className="text-gray-400 text-lg">
                {showPassword ? '🙈' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text className="text-xs text-red-500 mb-2">{errors.password}</Text>
          )}

          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <Pressable className="w-4 h-4 border border-gray-400 rounded mr-2 bg-white" />
              <Text className="text-xs text-[#222]">Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-xs text-[#FF7A1A] font-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-[#FF7A1A] rounded-lg py-3 mb-2 active:opacity-80"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center font-bold text-base">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
