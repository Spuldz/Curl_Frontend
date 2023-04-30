import { Button, View, Text } from "react-native";
import buttonStyle from "../../assets/styles/startingPage/button.style";
import { LinearGradient } from 'expo-linear-gradient';
export default function LandingButton() {
    return (
        <View>
            <View >
                <LinearGradient style={buttonStyle.landingButtonContainer} colors={['#F5C51C', '#FCDC12', '#FFE60D']} 
                                start={{ x: 0.2, y: 0.2}}
                                end={{x: 0.7, y: 0.7}}
                                >
                    <Text style={buttonStyle.landingButton}>
                        START BUILDING YOUR BODY
                    </Text>
                </LinearGradient>
            </View>
        </View>
    )
}