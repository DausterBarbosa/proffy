import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: "#8257E5"
    },

    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    title: {
        fontFamily: "Archivo-Bold",
        color: "#FFF",
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    },

    group: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default styles;