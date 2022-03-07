import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import About from "./src/screens/About";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<View style={styles.mainContainer}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					options={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Home'>
						{(props) => <Home {...props} userName={"atif aslam"} />}
					</Stack.Screen>
					<Stack.Screen
						options={{
							headerTitle: "Contact",
							headerTitleAlign: "center",
							headerTitleStyle: {
								fontSize: 20,
							},
						}}
						name='Contact'
						component={Contact}
					/>
					<Stack.Screen name='Course' component={Course} />
					<Stack.Screen name='About' component={About} />
					<Stack.Screen name='Student' component={UserData} />
					<Stack.Screen name='CourseDetails' component={CourseDetails} />
				</Stack.Navigator>
			</NavigationContainer>
			{/* <StatusBar style='auto' /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		marginTop: StatusBar.currentHeight,
	},
});
