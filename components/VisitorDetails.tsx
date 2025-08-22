import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VisitorDetailsModal({ visible, onClose, data, onApprove, onReject }: any) {
  if (!data) return null;
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 items-center justify-center bg-black/30">
        <View className="w-[90%] rounded-2xl bg-white p-5">
          {/* Header */}
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold">Visitor Details</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#222" />
            </TouchableOpacity>
          </View>
          {/* Photo */}
          <View className="mb-4 items-center">
            <Image
              source={{ uri: data.photo }}
              className="mb-2 h-24 w-24 rounded-lg"
              resizeMode="cover"
            />
          </View>
          {/* Details */}
          <View className="mb-4 flex-row flex-wrap">
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Visitor Name</Text>
              <Text className="font-bold">{data.name}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Pass Number</Text>
              <Text className="font-bold">{data.passNumber}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Mobile Number</Text>
              <Text>{data.mobile}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Department</Text>
              <Text className="font-bold">{data.department}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Secretary</Text>
              <Text className="font-bold">{data.secretary}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">PS Name</Text>
              <Text className="font-bold">{data.psName}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Identity Proof</Text>
              <Text className="font-bold">{data.identityProof}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Identity Proof Number</Text>
              <Text className="font-bold">{data.identityProofNumber}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Visiting Date</Text>
              <Text>{data.visitingDate}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Visiting Time</Text>
              <Text>{data.visitingTime}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Purpose</Text>
              <Text>{data.purpose}</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Check In</Text>
              <Text>--</Text>
            </View>
            <View className="mb-2 w-1/2">
              <Text className="text-xs text-gray-500">Check Out</Text>
              <Text>--</Text>
            </View>
          </View>
          {/* Approve/Reject Buttons */}
          <View className="mt-2 flex-row justify-between">
            <TouchableOpacity
              className="mr-2 flex-1 rounded-lg bg-green-500 py-3"
              onPress={onApprove}>
              <Text className="text-center font-semibold text-white">Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity className="ml-2 flex-1 rounded-lg bg-red-500 py-3" onPress={onReject}>
              <Text className="text-center font-semibold text-white">Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
