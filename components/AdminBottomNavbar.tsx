import { View, Text, TouchableOpacity} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function BottomNav({ active = "Dashboard", navigation }: any) {
  return (
    <View className="absolute left-0 right-0 bottom-0 pb-2 flex-row bg-white border-t border-gray-200 h-20 items-center justify-around z-50">
      <TouchableOpacity className="items-center flex-1" onPress={() => navigation.navigate('AdminDashboard')}>
        <MaterialIcons name="dashboard" size={24} color={active === "Dashboard" ? "#FF7A1A" : "#A0AEC0"} />
        <Text className={`text-xs mt-1 font-semibold ${active === "Dashboard" ? "text-[#FF7A1A]" : "text-gray-400"}`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-1" onPress={() => navigation.navigate('CreatePass')}>
        <Ionicons name="document-text-outline" size={24} color={active === "CreatePass" ? "#FF7A1A" : "#A0AEC0"} />
         <Text className={`text-xs mt-1 font-semibold ${active === "CreatePass" ? "text-[#FF7A1A]" : "text-gray-400"}`}>Create Pass</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center flex-1" onPress={() => navigation.navigate('SecretaryReport')}>
        <Feather name="bar-chart-2" size={22} color={active === "SecretaryReport" ? "#FF7A1A" : "#A0AEC0"}/>
        <Text className={`text-xs mt-1 font-semibold ${active === "SecretaryReport" ? "text-[#FF7A1A]" : "text-gray-400"}`}>Report</Text>
      </TouchableOpacity>
    </View>
  );
};