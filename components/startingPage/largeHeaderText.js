import { Text } from "react-native";
import largeHeaderTextStyle from "../../assets/styles/startingPage/largeHeaderText.style";

export default function LargeHeaderText() {
    return(
        <Text style={largeHeaderTextStyle.largeHeaderTextContainer}>
            <Text style={largeHeaderTextStyle.largeHeaderText}>
                VOLUME UP YOUR BODY GOALS
            </Text>
        </Text>
    )
}