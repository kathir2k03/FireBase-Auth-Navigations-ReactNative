import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import auth from "../../services/firebaseAuth";
function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState(null);
  function handleRegister() {
    setTextError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        setTextError(err.message);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
        <Button title="Register" onPress={handleRegister} />
      </View>
      {textError && <Text style={{ color: "red" }}> {textError} </Text>}
      <Text>Already Have an Account ? Login here</Text>
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

export default RegisterScreen;
