import { Image, View } from "react-native";
import React from "react";
import startingImage from "../../../assets/styles/startingPage/startingImage";

export default function AnimatedPicture() {
    return(
        <View>
            <View style={startingImage.mainPictureContainer}>
                <Image
                    style={{width: 500, height: 500}}
                    source={require("assets/pictures/exercise 7.png")}/>
            </View>
        </View>
    )
}