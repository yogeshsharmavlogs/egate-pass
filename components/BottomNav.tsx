import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function BottomNav({ active = "Dashboard", navigation }: any) {
  return (
    <View className="absolute left-0 right-0 bottom-0 flex-row bg-white border-t border-gray-200 h-16 items-center justify-around z-50">
      <TouchableOpacity className="items-center flex-1" onPress={() => navigation.navigate('UserDashboard')}>
        <MaterialIcons name="dashboard" size={24} color={active === "Dashboard" ? "#FF7A1A" : "#A0AEC0"} />
        <Text className={`text-xs mt-1 font-semibold ${active === "Dashboard" ? "text-[#FF7A1A]" : "text-gray-400"}`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-1">
        <Ionicons name="person-add-outline" size={24} color="#A0AEC0" />
        <Text className="text-xs text-gray-400 mt-1">Update Secy</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-1">
        <Ionicons name="document-text-outline" size={24} color="#A0AEC0" />
        <Text className="text-xs text-gray-400 mt-1">Create Pass</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-1">
        <Feather name="bar-chart-2" size={22} color="#A0AEC0" />
        <Text className="text-xs text-gray-400 mt-1">Report</Text>
      </TouchableOpacity>
    </View>
  );
}