import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return <View>
          <Text style={styles.text}>HomeScreen</Text>
          <Button
            onPress={() => props.navigation.navigate("Components")}
            title="Go to Components Demo"/>
          <Button
            title="Go to List Demo"
            onPress={() => props.navigate.navigate("List")} />
          <Button
            title="Go to Image Demo"
            onPress={() => props.navigate.navigate("Image")} />
          <Button
            title="Go to Counter Demo"
            onPress={() => props.navigate.navigate("Counter")} />
          <Button
            title="Go to Color Demo"
            onPress={() => props.navigate.navigate("Color")} />
          <Button
            title="Go to Square Demo"
            onPress={() => props.navigate.navigate("Square")} />
          <Button
            title="Go to Text Demo"
            onPress={() => navigation.navigate("Text")} />
          <Button
            title="Go to Box Demo"
            onPress={() => navigation.navigate("Box")} />
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

// Buttons with React Native

// Button: Very simple component for showing a button and detecting a press.

// Touchable Opacity: Highly customizable component that can detect a press 
//                    on just any kind of element. 
