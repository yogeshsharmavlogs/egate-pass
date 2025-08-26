import { View } from "react-native";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";

export default function Layout({ children, navigation, active }: any) {
  return (
    <View className="flex-1 bg-white">
      <AppHeader />
      <View className="flex-1">{children}</View>
      <BottomNav active={active} navigation={navigation} />
    </View>
  );
}