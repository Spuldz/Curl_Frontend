import { View, Text } from "react-native";
import RegisterHeader from "../../components/register/registerHeader";
import InputFields from "../../components/register/inputFields";
import CreateAccount from "../../components/register/createAccount";

export default function Register() {
    return (
        <View style={{height: "100%", backgroundColor: "#262622"}}>
            <View>
                <RegisterHeader/>
                <InputFields/>
                <CreateAccount/>
            </View>
        </View>
    )
}