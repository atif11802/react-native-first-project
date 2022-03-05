import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native-web";
import Menu from "../Components/Menu";

const Home = ({ userName }) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.homeTop}>
				<Image
					style={styles.headerImage}
					// source={require("../../assets/pexels-emily-ranquist-1205651.jpg")}
					resizeMode='content'
					source={{
						uri: "https://images.unsplash.com/photo-1606660956148-5291deb68185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
					}}
				/>
				<Text style={styles.mainHeader}>hello To</Text>
				<Text
					style={[
						styles.mainHeader,
						{
							fontSize: 33,
							color: "#888",
							marginTop: 0,
						},
					]}
				>
					{userName}
				</Text>
				<Text style={styles.paraStyle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</View>
			<View>
				<Menu />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		textAlign: "center",
	},
	homeTop: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	headerImage: {
		height: undefined,
		width: "100%",
		aspectRatio: 1,
		display: "flex",
		alignItems: "stretch",
		marginTop: 50,
		borderRadius: 10,
	},
	mainHeader: {
		fontSize: 30,
		color: "#344055",
		textTransform: "uppercase",
		marginTop: 20,
	},
	paraStyle: {
		textAlign: "left",
		fontSize: 20,
		color: "#7d7d7d",
		marginTop: 30,
		paddingBottom: 50,
		lineHeight: 25,
	},
});
