import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const Course = ({ navigation }) => {
	return (
		<View>
			<Text>Course</Text>
			<Button
				title='Go to Details'
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

export default Course;

const styles = StyleSheet.create({});
