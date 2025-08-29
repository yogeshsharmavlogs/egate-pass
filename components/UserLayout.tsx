import { View } from "react-native";
import AppHeader from "./AppHeader";
import UserBottomNav from "./UserBottomTab";

export default function UserLayout({ children, navigation, active }: any) {
  return (
    <View className="flex-1 bg-white">
      <AppHeader />
      <View className="flex-1">{children}</View>
      <UserBottomNav active={active} navigation={navigation} />
    </View>
  );
}