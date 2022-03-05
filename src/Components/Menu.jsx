import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";

const Menu = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.menuContainer}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Course")}
			>
				<Text style={styles.buttonText}>course</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("About")}
			>
				<Text style={styles.buttonText}>About</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Contact")}
			>
				<Text style={styles.buttonText}>Contact</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Student")}
			>
				<Text style={styles.buttonText}>Student</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Menu;

const styles = StyleSheet.create({
	menuContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "#999",
	},
	buttonStyle: {
		padding: 10,
		cursor: "pointer",
	},
	buttonText: {
		color: "#fff",
	},
});
