import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetailQuiz from "../components/ImageDetail";

const ImageScreenQuiz = () => {
    return (
        <View>
            <ImageDetailQuiz 
                title="Forest" 
                imageSource={require("../../assets/forest.jpg")}
                score={9} />
            <ImageDetailQuiz 
                title="Beach" 
                imageSource={require("../../assets/beach.jpg")}
                score={7} />
            <ImageDetailQuiz 
                title="Mountain" 
                imageSource={require("../../assets/mountain.jpg")}
                score={10} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreenQuiz;