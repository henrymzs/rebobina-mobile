import { StyleSheet, Text, View } from "react-native";
import { styles } from "../(auth)/login";

export default function Main() {
    return (
        <View style={styles.container}>
            <Text>Pagina De Adição de Filmes</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})