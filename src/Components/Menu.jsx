import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import { Icon } from "react-native-elements";

const Menu = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.menuContainer}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Course")}
			>
				<Icon
					raised
					name='bookmark'
					type='font-awesome'
					color='#f50'
					size={15}
				/>
				<Text style={styles.buttonText}>course</Text>
				{/* <Image source={{ uri: "" }} style={styles.imageStyle} /> */}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("About")}
			>
				<Icon raised name='child' type='font-awesome' color='#f50' size={15} />
				<Text style={styles.buttonText}>About</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Contact")}
			>
				<Icon raised name='user' type='font-awesome' color='#f50' size={15} />
				<Text style={styles.buttonText}>Contact</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => navigation.navigate("Student")}
			>
				<Icon
					raised
					name='graduation-cap'
					type='entypo'
					color='#f50'
					size={15}
				/>
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
