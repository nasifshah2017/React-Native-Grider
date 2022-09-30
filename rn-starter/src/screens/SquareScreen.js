import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

    // Three different state values (red, green and blue)

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {

        // color === 'red', 'green', 'blue'
        // change === +15, -15

        switch(color) {
            
            case "red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
            
            case "green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);

            case "blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => setColor("red", COLOR_INCREMENT)}      // Passing function as a prop
                onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}  
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => setColor("blue", COLOR_INCREMENT)}
                onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)} 
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => setColor("green", COLOR_INCREMENT)} 
                onDecrease={() => setColor("green" -1 * COLOR_INCREMENT)}
            />

            <View                                        // Built-in component from react-native
                style={{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red},${green},${blue})`
                }} 
            />
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


// Parent Component - SquareScreen: 
// needs to read the three different state values

// Child Component - ColorCounter (red), ColorCounter (green), ColorCounter (blue): 
// These three ColorCounter components need to change the three different state values

// Generally, we create the state variables in the most parent component that needs to 
// read or change a state value. 

// If a child needs to read a state value, the parent can pass it down as a prop

// Note: ColorCounter does not need to read the state values! This is just of our info.


// Quick Thoughts 

// 1. The App works right now - we could leave it as it is! But we could make it slightly better...

// 2. We have three "seperate" pieces of state 

// 3. For this app, these three pieces of state are extremely related

// 4. There is a precise set of well-known ways in which we update these values

// 5. This makes our state a great candidate for being managed by a "reducer"