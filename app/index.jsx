import { Text, View, Image, StyleSheet } from "react-native";
import postItImg from "../assets/images/post-it.png";

const HomeScreen = () => {
  return (
    <View
      style={styles.container}
    >
      <Image source={ postItImg }  style={styles.image}/>
      <Text style={styles.title}>Welcome to Mikord notes App</Text>
      <Text style={styles.subtitle}>Keep your thoughts in check!</Text>
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
});

export default HomeScreen;
