import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const UserData = ({ navigation }) => {
	return (
		<View>
			<Text>UserData</Text>
			<Button
				title='Go to Details'
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

export default UserData;

const styles = StyleSheet.create({});
