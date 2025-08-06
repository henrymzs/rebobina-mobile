import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Login() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" 
                onPress={() => router.back()}
                />
            </Pressable>
            <Text style={styles.logo}>Rebobina</Text>
            <View style={styles.form}>
                <Text style={styles.title}>Faça Login</Text>
                <Input placeholder="Seu E-mail" placeholderTextColor="#999" />
                <Input placeholder="Sua Senha" placeholderTextColor="#999" />
                <Button title="Fazer Login" />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080808ff",
        padding: 32,
    },
    logo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 48,
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    backButton: {
        paddingTop: 22
    }
});