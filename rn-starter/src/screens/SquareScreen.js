import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;

// 1. What piece of data is changing in our app?
// 2. What "type" of data is it?
// 3. What is the data's starting (default) value?

// 1. red, green, blue
// 2. number
// 3. 255