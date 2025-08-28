import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import RegisterScreen from '../components/Register';
import { UserDashboard } from '../components/UserDashboard';
import OfficerLogin from 'components/OfficerLogin';
import VisitorDetailsModal from 'components/VisitorDetails';
import AppHeader from 'components/AppHeader';
import UpdateSecretary from 'components/UpdateSecretary';
import CreatePass from 'components/CreatePass';
import EditProfile from 'components/EditProfile';
import SecretaryReport from 'components/SecretaryReport';
import { AdminDashboard } from 'components/AdminDashboard';
import CreateOptionsScreen from 'components/CreateOptionsScreen';

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
        <Stack.Screen name="UpdateSecretary" component={UpdateSecretary} />
        <Stack.Screen name="CreatePass" component={CreatePass} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SecretaryReport" component={SecretaryReport} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
