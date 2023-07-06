import { Pressable, Text, View } from "react-native";
import { useContext } from "react";

import profileContext from "./profileContext";

const CatFoodBowl = ({onPress}) =>{
    const {profile, setProfile} = useContext(profileContext);

    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Pressable disabled={profile.catFood==0} onPress={onPress}>
                <View>
                    {profile.catFood===0 ? 
                    <Text style={{fontSize:25}}>\______/</Text>
                    :
                    <>
                    <Text style={{fontSize:20}}>⣾⣿⣿⣿⣿⣷</Text>
                    <Text style={{fontSize:25}}>\_____/</Text>
                    </>}
                </View>
            </Pressable>
            <View>
                <Text> {profile.catFood} catfood remain ╭(°A°`)╮</Text>
            </View>
        </View>
    )
}

export default CatFoodBowl;