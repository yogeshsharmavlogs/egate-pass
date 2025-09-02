import { View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import UserLayout from './UserLayout';

const userRows = [
  {
    id: 1,
    department: 'Health Department',
    passNumber: '219120',
    mobile: '9829898212',
    secretary: 'Rohit Singh',
    psName: 'Akash Sharma',
    identityProof: 'Aadhaar',
    identityProofNumber: '4894 3393 9559',
    appointmentDate: '20/12/2024',
    appointmentTime: '11:30 AM',
    checkIn: '11:20 AM',
    checkOut: '01:30 PM',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 2,
    department: 'Animal Department',
    passNumber: '219121',
    mobile: '9876543210',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    appointmentDate: '21/12/2024',
    appointmentTime: '10:00 AM',
    checkIn: '09:50 AM',
    checkOut: '12:00 PM',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    department: 'Rural Department',
    passNumber: '219122',
    mobile: '9825454212',
    secretary: 'Narmit Singh',
    psName: 'Akash Sharma',
    identityProof: 'Aadhaar',
    identityProofNumber: '4894 3393 9559',
    appointmentDate: '20/12/2024',
    appointmentTime: '11:30 AM',
    checkIn: '11:20 AM',
    checkOut: '01:30 PM',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 5,
    department: 'Water Department',
    passNumber: '219123',
    mobile: '9875645410',
    secretary: 'Pratap Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    appointmentDate: '21/12/2024',
    appointmentTime: '10:00 AM',
    checkIn: '09:50 AM',
    checkOut: '12:00 PM',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

type UserDashboardProps = {
  navigation: NativeStackNavigationProp<any>;
};

export function UserDashboard({ navigation }: UserDashboardProps) {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <UserLayout navigation={navigation} active="Dashboard" className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="mb-2 mt-4 flex-row items-center justify-between px-4">
          <Text className="text-xl font-bold text-[#222]">User List</Text>
        </View>

        <View className="mx-4 mb-4 overflow-hidden rounded-xl border border-gray-200">
          <View className="flex-row bg-[#F7F9FB] px-3 py-3">
            <Text className="w-[20%] text-base font-semibold text-zinc-800">Sr No</Text>
            <Text className="w-[50%] text-base font-semibold text-zinc-800">Department</Text>
            <Text className="w-[30%] text-base font-semibold text-zinc-800">Details</Text>
          </View>

          {userRows.map((row, index) => (
            <View
              key={row.id}
              className={`flex-row px-3 py-3 border-t border-gray-100 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FB]'
              }`}>
              <Text className="w-[20%] text-base text-zinc-800">{row.id}</Text>
              <Text className="w-[50%] text-base text-[#222]">{row.department}</Text>

              <TouchableOpacity
                className="w-[30%]"
                onPress={() => {
                  setSelectedUser(row);
                  setModalVisible(true);
                }}>
                <Text className="text-base font-semibold text-[#FF7A1A]">View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 items-center justify-center bg-black/40">
          <View className="w-[90%] rounded-2xl bg-white p-5">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-xl font-bold">Visit Details</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSelectedUser(null);
                }}>
                <Ionicons name="close" size={26} color="#222" />
              </TouchableOpacity>
            </View>

            {selectedUser && (
              <>
                <View className="mb-4 items-center">
                  <Image
                    source={{ uri: selectedUser.photo }}
                    className="mb-2 h-24 w-24 rounded-lg"
                    resizeMode="cover"
                  />
                </View>

                <View className="flex-row flex-wrap">
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Department</Text>
                    <Text className="font-bold">{selectedUser.department}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Pass Number</Text>
                    <Text className="font-bold">{selectedUser.passNumber}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Mobile Number</Text>
                    <Text>{selectedUser.mobile}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Secretary</Text>
                    <Text className="font-bold">{selectedUser.secretary}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">PS Name</Text>
                    <Text className="font-bold">{selectedUser.psName}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Identity Proof</Text>
                    <Text className="font-bold">{selectedUser.identityProof}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Identity Proof Number</Text>
                    <Text className="font-bold">{selectedUser.identityProofNumber}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Appointment Date</Text>
                    <Text>{selectedUser.appointmentDate}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Appointment Time</Text>
                    <Text>{selectedUser.appointmentTime}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Check In</Text>
                    <Text>{selectedUser.checkIn}</Text>
                  </View>
                  <View className="mb-2 w-1/2">
                    <Text className="text-xs text-gray-500">Check Out</Text>
                    <Text>{selectedUser.checkOut}</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </UserLayout>
  );
}
