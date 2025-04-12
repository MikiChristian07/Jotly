import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import postItImg from "../assets/images/post-it.png";


const HomeScreen = () => {

  const router = useRouter();
  
  return (
    <View
      style={styles.container}
    >
      <Image source={ postItImg }  style={styles.image}/>
      <Text style={styles.title}>Welcome to Mikord notes App</Text>
      <Text style={styles.subtitle}>Keep your thoughts in check!</Text>

      <TouchableOpacity
        onPress={() => {
          router.push("/notes");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
