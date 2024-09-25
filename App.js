import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DigestScreen from './components/Digest';
import MagazineScreen from './components/Magazine';
import MonarchScreen from './components/Monarch';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; // For loading screen

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Calibri: require('./assets/calibri.otf'), // Path to your font file
  });

  if (!fontsLoaded) {
    return <AppLoading />; // Display a loading screen while fonts load
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Digest" // Start on the Digest screen
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName; 

              if (route.name === 'Digest') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Magazine') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'Monarch') {
                iconName = focused ? 'document' : 'document-text-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato', // Active tab color
            tabBarInactiveTintColor: 'gray', // Inactive tab color
          })}>
          <Tab.Screen
            name="Digest"
            component={DigestScreen}
            options={{ title: 'Digest' }}
          />
          <Tab.Screen
            name="Magazine"
            component={MagazineScreen}
            options={{ title: 'Magazine' }}
          />
          <Tab.Screen
            name="Monarch"
            component={MonarchScreen}
            options={{ title: 'Monarch' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
