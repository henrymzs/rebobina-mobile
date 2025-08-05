import { Text, View, StyleSheet, Image } from "react-native";
import { router } from "expo-router"

import { Button } from "@/components/button";

export default function Index() {
  function handleLogin() {
    router.navigate("/login");
  }
  function handleRegister() {
    router.navigate("/register")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rebobina</Text>
      <Image
        source={require('@/images/logo-rebobina.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Descomplique a Escolha</Text>
      <Text style={styles.hero}>Crie listas com quem você gosta, compartilhe seus interesses, sorteie o próximo filme e aproveite juntos.</Text>
      <Button title="Primeiro Acesso" onPress={handleRegister} />
      <Button style={{ backgroundColor: "none" }} title="Já tenho uma conta" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#080808ff"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  subtitle: {
    fontSize: 18,
    
    color: "#FFFFFF",
  },
  hero: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
  image: {
    alignSelf: 'center',
    width: 400,
    height: 400,
  }
})
