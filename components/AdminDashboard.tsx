import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import VisitorDetailsModal from './VisitorDetails';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AdminLayout from './AdminLayout';

const passes = [
  {
    label: 'Total Pass',
    value: 400,
    icon: 'document-text-outline',
    color: '#3B82F6',
    bg: 'bg-blue-100',
  },
  {
    label: 'Pending',
    value: 230,
    icon: 'time-outline',
    color: '#F97316',
    bg: 'bg-orange-100',
  },
  {
    label: 'Approved',
    value: 120,
    icon: 'checkmark-circle-outline',
    color: '#22C55E',
    bg: 'bg-green-100',
  },
  {
    label: 'Rejected',
    value: 50,
    icon: 'close-circle-outline',
    color: '#EF4444',
    bg: 'bg-red-100',
  },
];

const departmentData = [
  { name: 'Department 1', value: 58, color: '#FF7A1A' },
  { name: 'Department 2', value: 54, color: '#FF8C42' },
  { name: 'Department 3', value: 45, color: '#FF9E69' },
  { name: 'Department 4', value: 35, color: '#FFB090' },
  { name: 'Department 5', value: 25, color: '#FFC2B7' },
  { name: 'Department 6', value: 15, color: '#FFD4DE' },
];


const tableRows = [
  { id: 1, name: 'Rajesh Kumar' },
  { id: 2, name: 'Rajesh Kumar' },
  { id: 3, name: 'Rajesh Kumar' },
  { id: 4, name: 'Rajesh Kumar' },
  { id: 5, name: 'Rajesh Kumar' },
  { id: 6, name: 'Rajesh Kumar' },
  { id: 7, name: 'Rajesh Kumar' },
];


const createOptions = [
  {
    id: 1,
    title: 'Create Designation',
    icon: 'document-text-outline',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Create Department',
    icon: 'business-outline',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Create Pass',
    icon: 'card-outline',
    color: '#F59E0B',
  },
];


type AdminDashboardProps = {
  navigation: NativeStackNavigationProp<any>;
};

export function AdminDashboard({ navigation }: AdminDashboardProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState<any>(null);

    const maxValue = Math.max(...departmentData.map(item => item.value));
    

  return (
<>          
    <AdminLayout navigation={navigation} active="Dashboard" className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="mb-2 mt-4 flex-row items-center justify-between px-4">
          <Text className="text-xl font-bold text-[#222]">Dashboard</Text>
          <TouchableOpacity className="rounded-full bg-gray-100 p-2">
            <Ionicons name="filter-outline" size={20} color="#FF7A1A" />
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between px-4">
          {passes.map((item) => (
            <View
              key={item.label}
              className="mb-3 w-[48%] flex-row items-center rounded-xl border border-gray-200 bg-white p-4"
              style={{ minWidth: 150 }}>
              <View className={`mr-3 rounded-full p-2 ${item.bg}`}>
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <View>
                <Text className="text-xs text-gray-500">{item.label}</Text>
                <Text className="text-lg font-bold text-[#222]">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>
     
      <View className="px-4 mb-6">
             <Text className="text-lg font-bold text-[#222] mb-4">Department Statistics</Text>
             <View className="bg-white rounded-xl border border-gray-200 p-4">
               {departmentData.map((item, index) => (
                 <View key={index} className="mb-3">
                   <View className="flex-row items-center justify-between mb-1">
                     <Text className="text-sm text-gray-600">{item.name}</Text>
                     <Text className="text-sm font-semibold text-[#222]">{item.value}</Text>
                   </View>
                   <View className="h-2 bg-gray-200 rounded-full">
                     <View
                       className="h-2 rounded-full"
                       style={{
                         width: `${(item.value / maxValue) * 100}%`,
                         backgroundColor: item.color,
                       }}
                     />
                   </View>
                 </View>
               ))}
               
               <View className="flex-row justify-between mt-4 pt-2 border-t border-gray-100">
                 {[0, 100, 200, 300, 400, 500, 600, 700].map((value, index) => (
                   <Text key={index} className="text-xs text-gray-400">{value}</Text>
                 ))}
               </View>
             </View>
           </View>

        <View className="mb-1 mt-4 flex-row items-center justify-between px-4">
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
                <Text className="text-base font-semibold text-[#FF7A1A]">View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <VisitorDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={selectedVisitor}
        onApprove={() => {}}
        onReject={() => {}}
      />
    </AdminLayout>
    </>

  );
}
