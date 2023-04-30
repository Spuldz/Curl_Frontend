import LargeHeaderText from "../../components/startingPage/largeHeaderText";
import SmallHeaderText from "../../components/startingPage/smallHeaderText";
import mainStyle from "../../assets/styles/startingPage/main.style";
import headerTextStyle from "../../assets/styles/startingPage/headerText.style";
import { View } from "react-native";
import LandingButton from "../../components/startingPage/mainLandingButton";
import AnimatedPicture from "../../components/startingPage/animatedLogo";
export default function StartingPage() {
    return(
        <View style={mainStyle.startingPageContainer}>
            <View style={headerTextStyle.headerTextContainer}>
                <SmallHeaderText/>
                <LargeHeaderText/>
                <AnimatedPicture/>
                <LandingButton/>
            </View>
        </View>
    )
}