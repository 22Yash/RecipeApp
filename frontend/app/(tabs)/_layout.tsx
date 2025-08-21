import { Tabs} from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Spacer } from "tamagui";



export default function RootLayout({ toggleTheme }: { toggleTheme: () => void }) {
  return  <Tabs screenOptions={{
    tabBarActiveTintColor :"green", 
    
    headerShown: false ,
    tabBarStyle: {
      marginBottom:16, // Add padding to move icons up from bottom
      height: 60, // Adjust total tab bar height
      backgroundColor:"$background"
      
      
    },
    }} >
    
    <Tabs.Screen 
          name="index" 
          options={{
            title:"Home" ,
            tabBarIcon:({color})=>(
               <Entypo name="home" size={24} color={color} />
            ),
          }}
    />
    <Tabs.Screen 
          name="add" 
          options={{
            title:"Add",
            tabBarIcon:({color})=>(
              <FontAwesome6 name="add" size={24} color={color} />
            ),
            }}
    />
   
            


  </Tabs>;
}
