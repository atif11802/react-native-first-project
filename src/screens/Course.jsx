import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import { Button } from "react-native-web";
import Courses from "../api/Course";

const Course = ({ navigation }) => {
	const courseCard = ({ item }) => {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.courseContainer}>
					<View>
						<Image
							style={styles.cardImage}
							resizeMode='contain'
							source={{
								uri: item.image,
							}}
						/>
					</View>

					<Text style={styles.mainHeader}>{item.title}</Text>

					<Text style={styles.description}>{item.description}</Text>

					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.buttonStyle}
							onPress={() =>
								navigation.navigate("CourseDetails", {
									courseId: item.id,
								})
							}
						>
							<Text style={styles.buttonText}> course Details </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.courseContainer}>
			<View style={styles.backButton}>
				<Text style={styles.backText}>Course</Text>
				<Button
					style={styles.backButtonbtn}
					title='Go to Home'
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
			<FlatList
				keyExtractor={(item, index) => {
					return item.id;
				}}
				data={Courses}
				renderItem={courseCard}
			/>
		</View>
	);
};

export default Course;

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
	cardImage: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
	},
	mainContainer: {
		paddingHorizontal: 0,
	},
	courseContainer: {
		padding: 30,
		backgroundColor: "rgba(255, 255, 255, 0.90)",
		textAlign: "center",
		borderRadius: 5,
		shadowColor: "grey",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 8,
		elevation: 8,
		marginVertical: 30,
	},
	mainHeader: {
		fontSize: 22,
		color: "#344055",
		textTransform: "uppercase",
		// fontWeight: 500,
		paddingBottom: 15,
		textAlign: "center",
		fontFamily: "Nunito_700Bold",
	},
	description: {
		textAlign: "left",
		fontFamily: "WorkSans_400Regular",
		paddingBottom: 15,
		lineHeight: 20,
		fontSize: 16,
		color: "#7d7d7d",
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonStyle: {
		backgroundColor: "#809fff",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "#eee",
		fontFamily: "WorkSans_400Regular",
		textTransform: "capitalize",
	},
});
