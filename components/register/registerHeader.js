import { Text, Image, View } from "react-native";
import HeaderStyle from "../../assets/styles/register/header.style";

export default function RegisterHeader() {
    return(
        <View style={HeaderStyle.registerHeaderContainer}>
            <View >
                <Image style={HeaderStyle.registerPictureContainer} source={{uri: "https://raw.githubusercontent.com/Spuldz/Curl_Frontend/master/assets/pictures/exercise%207.png"}} />
            </View>
            <View>
                <Text style={HeaderStyle.registerHeaderText}>
                    CREATE ACCOUNT
                </Text>
            </View>
        </View>
    )
}