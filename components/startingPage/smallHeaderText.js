import {Text} from 'react-native';
import smallHeaderTextStyle from '../../assets/styles/startingPage/smallHeaderText.style';

export default function SmallHeaderText() {
    return (
        <Text style={smallHeaderTextStyle.smallHeaderTextContanier}>
            <Text style={smallHeaderTextStyle.smallHeaderText}>
                CURL - WORKOUT PLANNER
            </Text>
        </Text>
    )
}