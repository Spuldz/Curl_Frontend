import { TextInput, View } from "react-native";
import React from "react";
import inputFieldStyle from "../../assets/styles/register/inputField.style";

export default function InputFields() {
    const [name, onChangeName] = React.useState('NAME');
    const [email, onChangeEmail] = React.useState('EMAIL');
    const [password, onChangePassword] = React.useState('PASSWORD');
    const [repeatPassword, onChangeRepeatPassword] = React.useState('REPEAT PASSWORD');
    return(
        <View>
            <View>
                <TextInput style={inputFieldStyle.inputStyle} placeholder={"NAME"} onChangeText={onChangeName}/>
                <TextInput style={inputFieldStyle.inputStyle} placeholder={"EMAIL"} onChangeText={onChangeEmail}/>
                <TextInput style={inputFieldStyle.inputStyle} placeholder={"PASSWORD"} onChangeText={onChangePassword}/>
                <TextInput style={inputFieldStyle.inputStyle} placeholder={"REPEAT PASSWORD"} onChangeText={onChangeRepeatPassword}/>
            </View>
        </View>
    )
}