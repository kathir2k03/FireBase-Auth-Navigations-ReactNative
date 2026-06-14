import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import auth from "../../services/firebaseAuth";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState(null);
  function handleLogin() {
    setTextError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        setTextError(err.message);
      });
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
      <Text>Create an Account ? Register here</Text>
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
