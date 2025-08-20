import { Tabs} from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';


export default function RootLayout() {
  return  <Tabs screenOptions={{
    tabBarActiveTintColor :"green", 
    
    headerShown: false ,
    tabBarStyle: {
      marginBottom:16, // Add padding to move icons up from bottom
      height: 60, // Adjust total tab bar height
      
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
          name="recipe" 
          options={{
            title:"Search",
            tabBarIcon:({color})=>(
              <AntDesign name="search1" size={24} color={color} />
            ),
            }}
    />
    <Tabs.Screen 
          name="save" 
          options={{
            title:"Save",
            tabBarIcon:({color})=>(
              <FontAwesome name="bookmark" size={24} color={color} />
            )}}/>

  </Tabs>;
}
