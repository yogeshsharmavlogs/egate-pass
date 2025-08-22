import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import VisitorDetailsModal from './VisitorDetails';
import BottomNav from './BottomNav';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppHeader from './AppHeader';

const passes = [
  {
    label: 'Total Pass',
    value: 400,
    icon: 'document-text-outline',
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    label: 'Pending',
    value: 230,
    icon: 'time-outline',
    color: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    label: 'Approved',
    value: 120,
    icon: 'checkmark-circle-outline',
    color: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    label: 'Rejected',
    value: 50,
    icon: 'close-circle-outline',
    color: 'text-red-500',
    bg: 'bg-red-100',
  },
];

const tableRows = [
  {
    id: 1,
    name: 'Pradeep Tamta',
    passNumber: '219121',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 2,
    name: 'Yogesh Sharma',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 3,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 4,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
   {
    id: 5,
    name: 'Pradeep Tamta',
    passNumber: '219121',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 6,
    name: 'Yogesh Sharma',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 7,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 8,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
   {
    id: 9,
    name: 'Pradeep Tamta',
    passNumber: '219121',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 10,
    name: 'Yogesh Sharma',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 11,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 12,
    name: 'Demo User',
    passNumber: '219122',
    mobile: '9876543210',
    department: 'IT',
    secretary: 'Amit Singh',
    psName: 'Suresh Kumar',
    identityProof: 'PAN',
    identityProofNumber: 'ABCDE1234F',
    visitingDate: '21/12/2024',
    visitingTime: '10:00 AM',
    purpose: 'Official',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
];

const visitorDetailsData = {
  photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  name: 'Rajesh Kumar',
  passNumber: '219120',
  mobile: '9829898212',
  department: 'Health Department',
  secretary: 'Rahul Singh',
  psName: 'Akash Sharma',
  identityProof: 'Aadhaar',
  identityProofNumber: '4894 3393 9559',
  visitingDate: '20/12/2024',
  visitingTime: '11:30 AM',
  purpose: 'Official',
};

type UserDashboardProps = {
  navigation: NativeStackNavigationProp<any>;
};

export function UserDashboard({ navigation }: UserDashboardProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState<any>(null);
  return (
    <View className="flex-1 bg-white">
      <AppHeader />

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="mb-2 mt-4 flex-row items-center justify-between px-4">
          <Text className="text-xl font-bold text-[#222]">Dashboard</Text>
          <TouchableOpacity className="rounded-full bg-gray-100 p-2">
            <Ionicons name="notifications-outline" size={20} color="#FF7A1A" />
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between px-4">
          {passes.map((item, idx) => (
            <View
              key={item.label}
              className="mb-3 w-[48%] flex-row items-center rounded-xl border border-gray-200 bg-white p-4"
              style={{ minWidth: 150 }}>
              <View className={`mr-3 rounded-full p-2 ${item.bg}`}>
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={item.color.replace('text-', '#')}
                />
              </View>
              <View>
                <Text className="text-xs text-gray-500">{item.label}</Text>
                <Text className="text-lg font-bold text-[#222]">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="mb-1 mt-2 flex-row items-center justify-between px-4">
          <Text className="text-base font-bold text-[#222]">Daily Pass Table</Text>
          <TouchableOpacity className="p-2">
            <Feather name="search" size={18} color="#A0AEC0" />
          </TouchableOpacity>
        </View>

    <View className="mx-4 mb-4 overflow-hidden rounded-xl border border-gray-200">
  <View className="flex-row gap-20 bg-[#F7F9FB] px-2 py-2">
    <Text className="flex-1 text-base font-semibold text-zinc-800">Sr No</Text>
    <Text className="flex-1 text-base font-semibold text-zinc-800">Name</Text>
    <Text className="flex-2 text-base font-semibold text-zinc-800">Details</Text>
  </View>

  {tableRows.map((row, index) => (
    <View
      key={row.id}
      className={`flex-row gap-20 border-t border-gray-100 px-2 py-2 ${
        index % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FB]'
      }`}>
      <Text className="flex-1 text-base text-zinc-800">{row.id}</Text>
      <Text className="flex-2 text-base text-[#222]">{row.name}</Text>

      <TouchableOpacity
        className="flex-2"
        onPress={() => {
          setSelectedVisitor(row);
          setModalVisible(true);
        }}>
        <Text className="text-base font-semibold text-[#FF7A1A]">
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  ))}
</View>



mujhe table k hr ek row ko chodker ek row ka bg color  bg-[#F7F9FB] ye chahiye
      </ScrollView>
      <VisitorDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={selectedVisitor}
        onApprove={() => {}}
        onReject={() => {}}
      />

      <BottomNav active="Dashboard" navigation={navigation} />
    </View>
  );
}
