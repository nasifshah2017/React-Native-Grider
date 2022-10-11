import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    
    const friends = [

        {name: "Friend #1"},
        
        {name: "Friend #2"},

        {name: "Friend #3"},

        {name: "Friend #4"},

        {name: "Friend #5"},

        {name: "Friend #6"},

        {name: "Friend #7"},

        {name: "Friend #8"},

        {name: "Friend #9"},
    ];

    // Coverting the Array of Objects into a List
   
    return (
        <FlatList
            horizontal                              // Making the list appear horizontal instead of vertical
            showsHorizontalScrollIndicator={false}  // Making the horizontal scroll bar invisible
            keyExtractor={friend => friend.name}    // Assigning a key to each object
            data={friends} 
            render={({ item }) => {
                
                // element === {item: { name: "Friend #1 "}, index: 0}
                // item === {name: "Friend #1"}

                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreen;


// FlatList Element
// - Turns an array into a list of elements
// - We are required to pass in 'prop' of 'data' - the array of data that we are going 
//   create a bunch of elements out of 
// - Also required to pass in a 'renderItem' prop - function that will turn each individual 
//   item into an element 
// - If you are coming from React on the web, you might be used to 'mapping' an array of data
//   to build a list - FlatList is better with React Native