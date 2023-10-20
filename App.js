import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome, Feather  } from '@expo/vector-icons';
import Home from './screens/home'
import Chat from './screens/chat'
import Search from './screens/search'

const Stack = createNativeStackNavigator();
const SearchBar = () => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: -30,
  }}>
    <View style={{ 
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      }}>
      <FontAwesome name="search" size={24} color="black" style={{margin: 10}} />
      <TextInput
        style={{ backgroundColor: '#FFFFFF',
          padding: 10,
          fontSize:13,
          fontWeight:400}}
        placeholder='Dây cáp usb'
        placeholderTextColor={'#7D5B5B'}/>
    </View>
    <Ionicons style={{ marginLeft: 20 }} name="cart-outline" size={30} color="#ffffff" />
  </View>
)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 700
            },
            headerStyle: {
              backgroundColor: '#1BA9FF',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Ionicons style={{ marginRight: 20 }} name="cart-outline" size={24} color="#ffffff" />
            ),
          }}
        />
        <Stack.Screen name="Search" component={Search}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 700
            },
            headerStyle: {
              backgroundColor: '#1BA9FF',
            },
            headerTintColor: '#fff',
            headerTitle: () => 
              <SearchBar/>,
            headerRight: () => (
              <Feather style={{marginRight:20}} name="more-horizontal" size={30} color="#FFFFFF" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})