import { useContext } from "react";
import { DynamicColorIOS, Text, View } from "react-native";
import profileContext from "./profileContext";

const NameTag = () =>{
    const {profile} = useContext(profileContext)

    if(profile.age == 0){
        return null;
    }
    return(
        <View>
            <Text>You have adopted {profile.name} for {profile.age} days _(:_」∠)_</Text>
        </View>
    )
}

export default NameTag;