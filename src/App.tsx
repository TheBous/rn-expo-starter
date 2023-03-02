import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<Text>Test RN app</Text>
				<Text>Test 2 RN app</Text>
			</View>
			<Button title="Test" onPress={() => alert("test")} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	subContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
});
