import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreenQuiz = () => {
    
    const friends = [

        {name: "Friend #1", age: 20},
        
        {name: "Friend #2", age: 25},

        {name: "Friend #3", age: 30},

        {name: "Friend #4", age: 27},

        {name: "Friend #5", age: 36},

        {name: "Friend #6", age: 32},

        {name: "Friend #7", age: 18},

        {name: "Friend #8", age: 19},

        {name: "Friend #9", age: 33},
    ];

    // Coverting the Array of Objects into a List
   
    return (
        <FlatList
            keyExtractor={friend => friend.name}    // Assigning a key to each object
            data={friends} 
            render={({ item }) => {
                
                // element === {item: { name: "Friend #1 "}, index: 0}
                // item === {name: "Friend #1"}

                return(  
                        <Text style={styles.textStyle}>
                            Name: {item.name} - Age: {item.age}
                        </Text>
                    );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreenQuiz;
