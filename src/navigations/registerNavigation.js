import { Navigation } from 'react-native-navigation';

import { store } from '../store/configureStore';
import { Provider } from 'react-redux';

import AuthScreen from '../screens/Auth';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Detail from '../screens/Details/PlaceDetail';

const RegisterNavigation = () => {
  Navigation.registerComponent(
    'LoginScreen',
    () => AuthScreen,
    store,
    Provider
  );

  Navigation.registerComponent(
    'rnawesome.HomeScreen',
    () => Home,
    store,
    Provider
  );

  Navigation.registerComponent(
    'rnawesome.ProfileScreen',
    () => Profile,
    store,
    Provider
  );

  Navigation.registerComponent(
    'rnawesome.DetailScreen',
    () => Detail
  )
}

export default RegisterNavigation;