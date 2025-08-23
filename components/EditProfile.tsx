import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile(){
      const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 pt-10 pb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#222]">Edit Profile</Text>
        <TouchableOpacity>
          <Text className="text-base font-semibold text-[#FF7A1A]">Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="items-center mt-2 mb-2">
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            className="w-24 h-24 rounded-full"
            resizeMode="cover"
          />
          <TouchableOpacity>
            <Text className="mt-2 text-[#FF7A1A] font-semibold">Change Photo</Text>
          </TouchableOpacity>
        </View>

        <View className="px-4">
          <Text className="mb-1 text-[#222]">Full Name</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="Full Name"
            value="Akaskh Sharma"
            placeholderTextColor="#A0AEC0"
          />

          <Text className="mb-1 text-[#222]">Email ID</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="example@gmail.com"
            value="example@gmail.com"
            placeholderTextColor="#A0AEC0"
            keyboardType="email-address"
          />

          <Text className="mb-1 text-[#222]">Select Department</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Health Department"
              value="Health Department"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Select Secretary</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Rahul Singh"
              value="Rahul Singh"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Change Number</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="9876584356"
              value="9876584356"
              placeholderTextColor="#A0AEC0"
              keyboardType="phone-pad"
            />
            <TouchableOpacity>
              <Text className="text-[#FF7A1A] font-semibold">Send OTP</Text>
            </TouchableOpacity>
          </View>

          <Text className="mb-1 text-[#222]">Change Number</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Verify OTP"
              placeholderTextColor="#A0AEC0"
              keyboardType="number-pad"
            />
            <TouchableOpacity>
              <Text className="text-[#FF7A1A] font-semibold">Verify</Text>
            </TouchableOpacity>
          </View>

          <Text className="mb-1 text-[#222]">Current Password</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Password@4839"
              placeholderTextColor="#A0AEC0"
              secureTextEntry
            />
            <Ionicons name="eye-outline" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">New Password</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Password@4839"
              placeholderTextColor="#A0AEC0"
              secureTextEntry
            />
            <Ionicons name="eye-outline" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Confirm Password</Text>
          <View className="mb-8 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Password@4839"
              placeholderTextColor="#A0AEC0"
              secureTextEntry
            />
            <Ionicons name="eye-outline" size={20} color="#A0AEC0" />
          </View>
        </View>
      </ScrollView>
    </View>
  )}