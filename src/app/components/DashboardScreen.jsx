import { signOut } from "firebase/auth";
import { Button, StyleSheet, Text, View } from "react-native";
import auth from "../../services/firebaseAuth";

const DashboardScreen = () => {
  function handleLogout() {
    signOut(auth);
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log("LOGGED IN");
    //     console.log(user);
    //   } else {
    //     console.log("LOGGED OUT");
    //   }
    // });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Dashboard</Text>
      <View style={styles.buttonDiv}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttonDiv: {
    width: 80,
    marginBottom: 15,
  },
});

export default DashboardScreen;
