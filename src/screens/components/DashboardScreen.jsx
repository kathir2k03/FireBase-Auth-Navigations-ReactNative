import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const DashboardScreen = ({ navigation }) => {
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("Logged Out");
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [edtiIndex, setEditIndex] = useState(null);
  function handleSubmit() {
    if (name.trim().length === 0) return;

    if (edtiIndex !== null) {
      const updateList = [...list];
      console.log("updateList", updateList);
      updateList[edtiIndex] = name;
      setList(updateList);
      setEditIndex(null);
    } else {
      setList((prev) => [...prev, name]);
    }
    setName("");
  }

  function removeHandle(index) {
    const removedItem = list.filter((_, id) => index !== id);
    setList(removedItem);
  }

  function editHandle(index) {
    setName(list[index]);
    setEditIndex(index);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Dashboard</Text>
        <View style={styles.buttonDiv}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
      <TextInput
        style={styles.styledInput}
        placeholder="Enter Name"
        value={name}
        // placeholderTextColor="red"
        onChangeText={(name) => setName(name)}
      />
      <Pressable style={styles.buttonDiv} onPress={handleSubmit}>
        <Text style={{ color: "#f5f5f5f5" }}>
          {edtiIndex !== null ? "Update" : "Submit"}
        </Text>
      </Pressable>
      <FlatList
        data={list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>{item}</Text>

            <View style={styles.actionContainer}>
              <Pressable
                style={styles.editBtn}
                onPress={() => editHandle(index)}
              >
                <Text style={styles.btnText}>Edit</Text>
              </Pressable>

              <Pressable
                style={styles.deleteBtn}
                onPress={() => removeHandle(index)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },

  styledInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  buttonDiv: {
    backgroundColor: "#4CAF50",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3, // Android shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  itemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },

  actionContainer: {
    flexDirection: "row",
  },

  editBtn: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },

  deleteBtn: {
    backgroundColor: "#F44336",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  btnText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
export default DashboardScreen;
