import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const Contact = ({ navigation }) => {
	return (
		<View>
			<View style={styles.backButton}>
				<Text style={styles.backText}>Contact</Text>
				<Button
					style={styles.backButtonbtn}
					title='Go to Home'
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
		</View>
	);
};

export default Contact;

const styles = StyleSheet.create({
	backButton: {
		display: "flex",
		flexDirection: "row",
	},
	backText: {
		flex: 0.5,
	},
	backButtonbtn: {
		flex: 0.5,
	},
});
