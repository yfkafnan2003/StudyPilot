
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen';
import SubjectsScreen from './src/screens/SubjectsScreen';
import AssistantScreen from './src/screens/AssistantScreen';
import PlannerScreen from './src/screens/PlannerScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Dashboard: '🏠',
  Subjects: '📚',
  Assistant: '🤖',
  Planner: '📅',
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: {
            height: 65,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E2E8F0',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>
              {tabIcons[route.name]}
            </Text>
          ),
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Subjects" component={SubjectsScreen} />
        <Tab.Screen name="Assistant" component={AssistantScreen} />
        <Tab.Screen name="Planner" component={PlannerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
