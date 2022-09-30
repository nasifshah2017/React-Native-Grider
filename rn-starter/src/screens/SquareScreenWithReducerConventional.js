import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {       // action: The change that we need to make to our state

    // state === {red: number, green: number, blue: number}
    
    // action === {type: "change_red" || "change_green" || "change_blue", payload: 15 || -15}

    switch(action.type) {  // We are never going to change our state directly: state.red = state.red + 15. We will never do that. 
        
        // Copying the state as it is and only making change to the item of the object indicated in the action, in this case red,
        // if the item indicated in the action does not match then we are keeping the state as it is and moving to the next item in the 
        // next case.

        case "change_red":  
            return state.red + action.payload > 255 || state.red + action.payload < 0    
            ? state
            : { ...state, red: state.red + action.payload };  
        
        case "change_green": // If the value is above 255 or below 0 then no change will be applied and the state will be returned as it is
            return state.green + action.payload > 255 || state.green + action.payload < 0    
            ? state
            : { ...state, green: state.green + action.payload }; 
        
        case "change_blue": 
            return state.blue + action.payload > 255 || state.blue + action.payload < 0    
            ? state
            : { ...state, blue: state.blue + action.payload }; 
        
        default:
            return state;
    }
        
};

const SquareScreenWithReducerConventional = () => {

    // dispatch: The function that runs the reducer

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}      
                onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}  
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })} 
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
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

export default SquareScreenWithReducerConventional;

// Convention

// Our Action Object Had..

// {colorToChange: "red", amount: 15}

// Usually by convention, we'll instead use:

// {type: "change_red", payload: 15}

// type: The string that describes the exact change operation that we want to make

// payload: Some data that is critical to the change operation 

// The program that we coded above now we will code that below as an alternative convention.