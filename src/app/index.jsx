import { StyleSheet, View } from "react-native";
import DashboardScreen from "./components/DashboardScreen";
import LoginScreen from "./components/LoginScreen";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <RegisterScreen /> */}
      <LoginScreen />
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
