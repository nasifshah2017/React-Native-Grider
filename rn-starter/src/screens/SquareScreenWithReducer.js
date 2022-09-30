import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {       // action: The change that we need to make to our state

    // state === {red: number, green: number, blue: number}
    
    // action === {colorToChange: "red" || "green" || "blue", amount: 15 || -15}

    switch(action.colorToChange) {  // We are never going to change our state directly: state.red = state.red + 15. We will never do that. 
        
        // Copying the state as it is and only making change to the item of the object indicated in the action, in this case red,
        // if the item indicated in the action does not match then we are keeping the state as it is and moving to the next item in the 
        // next case.

        case "red":  
            return state.red + action.amount > 255 || state.red + action.amount < 0    
            ? state
            : { ...state, red: state.red + action.amount };  
        
        case "green": // If the value is above 255 or below 0 then no change will be applied and the state will be returned as it is
            return state.green + action.amount > 255 || state.green + action.amount < 0    
            ? state
            : { ...state, green: state.green + action.amount }; 
        
        case "blue": 
            return state.blue + action.amount > 255 || state.blue + action.amount < 0    
            ? state
            : { ...state, blue: state.blue + action.amount }; 
        
        default:
            return state;
    }
        
};

const SquareScreenWithReducer = () => {

    // dispatch: The function that runs the reducer

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })}      
                onDecrease={() => dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })}  
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })}
            />

            <View                                        // Built-in component from react-native
                style={{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }} 
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreenWithReducer;


// Reducer: The function that manages or changes to an object

// 1. Really fancy name.

// 2. The function that gets called by two objects.

// 3. Argument 1: The object that has all our state in it.  {red: 0, green: 0, blue: 0}

// 4. Argument 2: The object that describes the update that we want to make.    {colorToChange: "red", amount: 15}

// 5. We look at Argument 2 and use it to decide how to change Argument 1.

// 6. Two technicalities - (1) We never change Argument 1 directly. (2) We must always return a value to be used as 
//    Argument 1. 