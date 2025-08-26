import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Layout from './Layout';

export default function CreatePass({ navigation }: any) {
  return (
    <Layout navigation={navigation} active="CreatePass" className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-4 pt-6">
          <Text className="text-xl font-bold text-[#222] mb-4">Create Pass</Text>

          <Text className="mb-1 text-[#222]">Full Name</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="Enter your Name"
            placeholderTextColor="#A0AEC0"
          />
          
          <Text className="mb-1 text-[#222]">Select Gender</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Gender"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />\
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Identity Proof</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Identity Proof"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Identity Proof Number</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="Identity Proof Number"
            placeholderTextColor="#A0AEC0"
          />

          <Text className="mb-1 text-[#222]">Select Organization</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Organization"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Select Department</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Department"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Select Designation</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Designation"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Select Visiting Officer</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Visiting Officer"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Purpose of Visit</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Select Purpose of Visit"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Appointment Date</Text>
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4">
            <TextInput
              className="flex-1 py-3"
              placeholder="Appointment Date"
              placeholderTextColor="#A0AEC0"
              editable={false}
            />
            <Ionicons name="calendar-outline" size={20} color="#A0AEC0" />
          </View>

          <Text className="mb-1 text-[#222]">Appointment Time</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="Appointment Time"
            placeholderTextColor="#A0AEC0"
          />

          <Text className="mb-1 text-[#222]">Meeting Agenda</Text>
          <TextInput
            className="mb-4 rounded-lg border border-[#E5E7EB] bg-[#F7F9FB] px-4 py-3"
            placeholder="Meeting Agenda"
            placeholderTextColor="#A0AEC0"
            multiline
            numberOfLines={3}
          />

          <Text className="mb-1 text-[#222]">Upload Photo</Text>
          <View className="mb-8 items-center justify-center rounded-xl border-2 border-dashed border-[#E5E7EB] bg-[#F7F9FB] py-8">
            <Ionicons name="cloud-upload-outline" size={36} color="#A0AEC0" />
            <Text className="mt-2 text-xs text-[#FF7A1A] font-semibold">
              Upload a file or drag and drop
            </Text>
            <Text className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</Text>
          </View>

          <TouchableOpacity className="mb-8 bg-[#FF7A1A] rounded-xl py-4">
            <Text className="text-white text-center font-semibold text-base">Apply PASS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
}