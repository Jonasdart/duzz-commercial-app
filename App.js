import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/TabNavigator';
import axios from 'axios';

axios.defaults.baseURL = 'http://commercial.duzzsystem.com.br:8080';
axios.defaults.headers = {
  company: 3,
  sessionToken:
    'f3c23aeea42e0555be32ea6ea0a48da7-1-3-a3175bcbef6ab167afe0fa33210cc0fe',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
