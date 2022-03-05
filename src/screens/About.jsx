import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const About = ({ navigation }) => {
	return (
		<View>
			<Text>About</Text>
			<Button
				title='Go to Details'
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

export default About;

const styles = StyleSheet.create({});
