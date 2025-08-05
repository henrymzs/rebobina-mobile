import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router"

import { Button } from "@/components/button";
import { Input } from "@/components/input";


export default function Index() {
  const [name, Setname] = useState<string>();

  function handleNext() {
    router.navigate("/login");
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}</Text>
      <Input onChangeText={Setname} />
      <Button title="Continuar" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
})
