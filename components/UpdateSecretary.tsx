import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Layout from './Layout';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function UpdateSecretary({ navigation }: Props) {
  return (
    <Layout navigation={navigation} active="UpdateSecretary" className="flex-1 bg-white">
      <View className="px-4 pt-6">
        <Text className="text-xl font-bold text-[#222] mb-6">Update Secretary</Text>

        <Text className="mb-1 text-[#222]">Secretary Full Name</Text>
        <TextInput
          className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
          placeholder="Enter your Name"
          placeholderTextColor="#A0AEC0"
        />

        <Text className="mb-1 text-[#222]">Select Department</Text>
        <View className="mb-8 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
          <TextInput
            className="flex-1 py-3"
            placeholder="Select Gender"
            placeholderTextColor="#A0AEC0"
            editable={false}
          />
          <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
        </View>

        <TouchableOpacity className="mt-8 bg-[#FF7A1A] rounded-xl py-4">
          <Text className="text-white text-center font-semibold text-base">Update</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}