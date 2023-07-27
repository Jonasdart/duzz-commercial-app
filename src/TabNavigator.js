import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import BillsToPay from './pages/BillsToPay';
import Sales from './pages/Sales';
import CashRegisterList from './pages/CashRegisterList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: tw`bg-white`,
        headerTitleStyle: tw`text-blue-900 font-bold text-5x1`,
        headerTitleAlign: `center`,
        tabBarStyle: tw`bg-blue-600`,
        tabBarActiveTintColor: tw`text-gray-100`.color,
        tabBarInactiveTintColor: tw`text-gray-400`.color,
      }}
      backBehavior="history"
      sceneContainerStyle={tw`bg-white`}
    >
      <Tab.Screen
        name="Contas a Pagar"
        component={BillsToPay}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vendas em Aberto"
        component={Sales}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Meus Caixas"
        component={CashRegisterList}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'cash' : 'cash-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
