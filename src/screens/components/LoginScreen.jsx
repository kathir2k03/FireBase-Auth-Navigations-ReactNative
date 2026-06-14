import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import auth from "../../services/firebaseAuth";
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState(null);

  const checkIfLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Dashboard");
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  function handleLogin() {
    setTextError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Dashboard");
      })
      .catch((err) => {
        setTextError(err.message);
      });
  }

  function goToRegister() {
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.textField}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <View style={styles.buttonDiv}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      {textError && <Text style={{ color: "red" }}> {textError} </Text>}
      <Text onPress={goToRegister}>Create an Account ? Register here</Text>
    </View>
  );
}

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
  textField: {
    width: 250,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
  },
  buttonDiv: {
    width: 80,
    marginBottom: 15,
  },
});

export default LoginScreen;
