import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import colors from "@/constants/colors";

import { useState } from "react";

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#080808ff" }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"

                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Pressable style={styles.backButton}>
                                <Ionicons
                                    name="arrow-back"
                                    size={24}
                                    color="#FFFFFF"
                                    onPress={() => router.back()}
                                />
                            </Pressable>
                            <Text style={styles.logoText}>
                                <Text style={{ color: "#F3541C" }}>Reb</Text>obina
                            </Text>
                        </View>
                        <View style={styles.formWrapper}>
                            <View style={styles.form}>
                                <Text style={styles.formTitle}>Faça Login</Text>

                                <View>
                                    <Text style={styles.label}>Email</Text>
                                    <Input
                                        placeholder="Seu E-mail"
                                        placeholderTextColor="#999"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.label}>Senha</Text>
                                    <Input
                                        placeholder="Sua Senha"
                                        placeholderTextColor="#999"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry
                                    />
                                </View>

                                <Button title="Realizar Login" />
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080808ff",
        paddingHorizontal: 32,
        paddingTop: 32,
    },
    header: {
        marginTop: 32,
        paddingVertical: 12,
    },
    logoText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 12,
    },
    formWrapper: {
        marginTop: 32,
        paddingTop: 32,
    },
    form: {
        gap: 16,
        paddingTop: 32,
    },
    formTitle: {
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
    },
    label: {
        color: "#FFFFFF",
        marginBottom: 4,
    },
    backButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.orange,
        alignSelf: "flex-start",
    }
});