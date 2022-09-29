import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

// Styling

const styles = StyleSheet.create({});

export default CounterScreen;


// Props: System to pass data from a parent to a child.

// State: System to track a piece of data that will change over time.
//        If that data changes then our app will 're-render'.


// 3 main questions those are needed to be asked:

// 1. What piece of data is changing in our app?
// 2. What "type" of data is it?
// 3. What is the data's starting (default) value?

// 1. "counter"
// 2. number
// 3. 0 

// 1. "name"
// 2. string
// 3. "

// 1. "blogPosts"
// 2. array of objects
// 3. []


// Lifecycle Chart of State

// 1. App Start Up

// 2. We navigate to the CounterScreen. 'counter' piece of state is initialized.    [counter: 0]

// 3. User taps on the 'Increase' button, and the 'onPress' callback runs.

// 4. 'onPress' calls 'setCounter', and updates its value.

// 5. After a very 'brief' pause, React automatically 'rerenders' or re-runs the CounterScreen.

// 6. CounterScreen was already ran once! The state variable 'counter' "is not" initialized again.

// 7. 'counter' now has an updated value of '1'.                                    [counter: 1]

// 8. We return some JSX that references the updated 'counter' variable. 


// Few Notes on State:

// 1. We are using function-based state in a functional component. React also has class-based 
//   components that have access to state. 

// 2. We 'never' directly modify a state variable. React doesn't detect this change! Only use 
//   the setter function. 

// 3. We can name the state variable anything we wish.

// 4. We can track any kind of data that changes over time - a number, string, array of objects,
//    etc. 

// 5. When a component is rerendered, "all of its children get rerendered too".

// 6. A state variable can be passed to a child component! At that point, the state variable is 
//    now being used as props. 