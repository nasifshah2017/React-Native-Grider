import React from "react";
import { Text, StylesSheet, View } from "react-native";

const HomeScreenQuiz = () => {

    const name = "Nasif";

    return(
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native!
            </Text>
            <Text style={styles.subHeaderStyle}>
                My name is {name}
            </Text>
        </View>
    )
};

// The "StyleSheet.create()" function validates a set of styling rules 
// that we pass into it. We can use it or pass styling directly into an
// element 

const styles = StylesSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default HomeScreenQuiz;