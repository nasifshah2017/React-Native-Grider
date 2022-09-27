import React from "react";
import { Text, StylesSheet, View } from "react-native";

const ComponentsScreen = () => {
    return (
    <View>
        <Text style={styles.textStyle}>
            This is the Component's Screen
        </Text>
    </View>
    )
};

// The "StyleSheet.create()" function validates a set of styling rules 
// that we pass into it. We can use it or pass styling directly into an
// element 

const styles = StylesSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;


