import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from "react-native";
import createButtonStyle from '../../assets/styles/register/createButton.style';
export default function CreateAccount({ onpress }) {
    return(
        <View>
            <View>
                <LinearGradient style={createButtonStyle.buttonStyleContainer} colors={['#F5C51C', '#FCDC12', '#FFE60D']} 
                                start={{ x: 0.2, y: 0.2}}
                                end={{x: 0.7, y: 0.7}}
                                >
                    <Text style={createButtonStyle.buttonStyle}>
                        CREATE
                    </Text>
                </LinearGradient>
            </View>
        </View>
    )
}