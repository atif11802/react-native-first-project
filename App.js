import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import About from "./src/screens/About";
import UserData from "./src/screens/UserData";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<View>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home'>
						{(props) => <Home {...props} userName={"atif aslam"} />}
					</Stack.Screen>
					<Stack.Screen name='Contact' component={Contact} />
					<Stack.Screen name='Course' component={Course} />
					<Stack.Screen name='About' component={About} />
					<Stack.Screen name='Student' component={UserData} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({});
