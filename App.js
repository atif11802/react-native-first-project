import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<View>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					{/* <Stack.Screen name='Home' component={Home} /> */}
					<Stack.Screen name='Home'>
						{(props) => <Home {...props} userName={"atif aslam"} />}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({});
