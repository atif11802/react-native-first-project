import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const Contact = ({ navigation }) => {
	return (
		<View>
			<Text>Contact</Text>
			<Button
				title='Go to Details'
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

export default Contact;

const styles = StyleSheet.create({});
