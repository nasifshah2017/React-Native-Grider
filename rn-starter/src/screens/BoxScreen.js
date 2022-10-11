import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    viewStyle: {

        borderWidth: 3,
        borderColor: "black",
        height: 200,
        alignItems: "flex-end"

    },

    textOneStyle: {

        borderWidth: 3,
        borderColor: "red",
       // flex: 4

    },

    textTwoStyle: {

        borderWidth: 3,
        borderColor: "red",
        alignSelf: "stretch",
        position: "absolute",
        fontSize: 18,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
       // flex: 4

    },

    textThreeStyle: {

        borderWidth: 3,
        borderColor: "red",
       // flex: 2

    }



});

export default BoxScreen;


// Layout Systems

// 1. Box Object Model

// The height/width of an element + space around it

// Use this to affect the positioning of a single element

// 'Content' and 'Padding' sections show background color,
// Border and Margin do not

// 2. Flex Box

// How some number of sibling elements get laid out inside 
// a parent

// Use this to position multiple elements with a common 
// parent

// 3. Position

// How a single element gets laid out inside of a parent

// Use this to override Box Object Model + Flex Box


// Shortcuts

// margin: Set the margin on all sides

// marginVertical: Set the margin on top and bottom

// marginHorizontal: Set the margin on left and right

// padding: Set the padding on all sides

// paddingVeritcal: Set the padding on top and bottom

// paddingHorizontal: Set the padding on left and right

// borderWidth: Set border width on all sides


// Apply Box Object Model Rules:

// Is position 'absolute'

// If the answer is yes then, apply some flex box rules, ignore 
// all siblings. 
// Apply top, left, right, bottom

// If the answer is no then, apply all flex box rules, considering 
// siblings. 
// Place element inside parent
// Apply top, left, right, bottom 