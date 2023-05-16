import react from "react";
import { Text, View } from "react-native";
import accountStyle from "../../assets/styles/startingPage/account.style";
export default function AlreadyLogged() {
    return(
        <View>
            <View style={accountStyle.loggedContainer}>
                <Text style={accountStyle.loggedText}>ALREADY HAVE AN ACCOUNT?
                <Text style={accountStyle.logIn} > SIGN IN</Text></Text>
            </View>
        </View>
    )
}