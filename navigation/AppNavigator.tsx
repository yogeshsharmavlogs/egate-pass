import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import RegisterScreen from '../components/Register';
import { UserDashboard } from '../components/UserDashboard';
import OfficerLogin from 'components/OfficerLogin';
import VisitorDetailsModal from 'components/VisitorDetails';
import AppHeader from 'components/AppHeader';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="OfficerLogin" component={OfficerLogin} />
        <Stack.Screen name="VisitorDetail" component={VisitorDetailsModal} />
        <Stack.Screen name="AppHeader" component={AppHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
