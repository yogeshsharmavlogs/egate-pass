import { View } from "react-native";
import AppHeader from "./AppHeader";
import AdminBottomNavbar from "./AdminBottomNavbar";

export default function AdminLayout({ children, navigation, active }: any) {
  return (
    <View className="flex-1 bg-white">
      <AppHeader />
      <View className="flex-1">{children}</View>
      <AdminBottomNavbar active={active} navigation={navigation} />
    </View>
  );
}