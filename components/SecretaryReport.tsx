import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "./BottomNav";
import AppHeader from "./AppHeader";

export default function SecretaryReport({ navigation }: any) {
  const [tableRows] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      department: "Health Department",
      secretary: "Rahul Singh",
      psName: "Akash Sharma",
      identityProof: "Aadhaar",
      identityProofNumber: "4894 3393 9559",
      appointmentDate: "20/12/2024",
      appointmentTime: "11:30 AM",
      checkIn: "11:20 AM",
      checkOut: "02:00 PM",
    },
    {
      id: 2,
      name: "Suresh Sharma",
      department: "Finance Department",
      secretary: "Ankit Jain",
      psName: "Neha Patel",
      identityProof: "PAN",
      identityProofNumber: "ABCDP1234K",
      appointmentDate: "21/12/2024",
      appointmentTime: "12:00 PM",
      checkIn: "11:50 AM",
      checkOut: "01:00 PM",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState<any>(null);

  return (
    <View className="flex-1 bg-white">
      <AppHeader />

      <View className="flex-row items-center justify-between px-4 pt-6 pb-4">
        <Text className="text-xl font-bold text-[#222]">Report</Text>
        <View className="flex-row items-center space-x-3">
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            className="rounded-lg border border-gray-300 bg-[#F7F9FB] px-3 py-1 w-32"
            placeholder="Search"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Ionicons name="download-outline" size={26} color="#FF7A1A" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="px-4">
        <View className="mb-4 overflow-hidden rounded-xl border border-gray-200">
          <View className="flex-row bg-[#F7F9FB] px-2 py-2">
            <Text className="flex-1 font-semibold text-[#222]">Sr No</Text>
            <Text className="flex-1 font-semibold text-[#222]">Name</Text>
            <Text className="flex-2 font-semibold text-[#222]">Details</Text>
          </View>

          {tableRows.map((row, index) => (
            <View
              key={row.id}
              className={`flex-row border-t border-gray-100 px-2 py-2 ${
                index % 2 === 0 ? "bg-white" : "bg-[#F7F9FB]"
              }`}
            >
              <Text className="flex-1 text-[#222]">{row.id}</Text>
              <Text className="flex-1 text-[#222]">{row.name}</Text>
              <TouchableOpacity
                className="flex-2"
                onPress={() => {
                  setSelectedVisitor(row);
                  setModalVisible(true);
                }}
              >
                <Text className="font-semibold text-[#FF7A1A]">View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-2xl p-5">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-[#222]">
                Visitor Details
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} color="#222" />
              </TouchableOpacity>
            </View>

           {selectedVisitor && (
        <View className="flex-row flex-wrap">
          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Visitor Name</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.name}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Department Name</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.department}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Secretary</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.secretary}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">PS Name</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.psName}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Identity Proof</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.identityProof}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Identity Proof Number</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.identityProofNumber}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Appointment Date</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.appointmentDate}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Appointment Time</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.appointmentTime}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Check In</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.checkIn}
            </Text>
          </View>

          <View className="w-1/2 mb-3">
            <Text className="text-sm text-blue-600">Check Out</Text>
            <Text className="text-base font-medium text-[#222]">
              {selectedVisitor.checkOut}
            </Text>
          </View>
        </View>
      )}
          </View>
        </View>
      </Modal>

      <BottomNav active="SecretaryReport" navigation={navigation} />
    </View>
  );
}
