import { Image, View } from "react-native";
import React from "react";
import startingImage from "../../../assets/styles/startingPage/startingImage";

export default function AnimatedPicture() {
    return(
        <View>
            <View style={startingImage.mainPictureContainer}>
                <Image
                    style={startingImage.picture}
                    source={{uri: "https://raw.githubusercontent.com/Spuldz/Curl_Frontend/master/assets/pictures/exercise%207.png"}}/>
            </View>
        </View>
    )
}