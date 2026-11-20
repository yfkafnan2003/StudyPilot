
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import DashboardScreen from '../screens/dashboard/DashboardScreen';
import SubjectsScreen from '../screens/subjects/SubjectsScreen';
import AssistantScreen from '../screens/assistant/AssistantScreen';
import PlannerScreen from '../screens/planner/PlannerScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Dashboard: 'D',
  Subjects: 'S',
  Assistant: 'AI',
  Planner: 'P',
  Profile: 'U',
};

export default function MainTabNavigator() {
  return (
    <>
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
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                opacity: focused ? 1 : 0.6,
              }}
            >
              {tabIcons[route.name]}
            </Text>
          ),
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Subjects" component={SubjectsScreen} />
        <Tab.Screen name="Assistant" component={AssistantScreen} />
        <Tab.Screen name="Planner" component={PlannerScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
