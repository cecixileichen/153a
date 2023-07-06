import { Text, View } from "react-native";

const DeadCat = ({name}) =>{
    return(
        <View>
            <Text style={{fontSize:45}}>     ／l、 </Text>
            <Text style={{fontSize:45}}>  （ x､ x  ７ </Text> 
            <Text style={{fontSize:45}}>     l、 ~ヽ </Text>
            <Text style={{fontSize:45}}>     じしf_, )ノ </Text>
            <Text>  </Text>
            <Text style={{fontSize:15, alignSelf: 'center'}}>{name} starve to dead………</Text>
            <Text style={{fontSize:15, alignSelf: 'center'}}>Your cat needs u more than u believe ᐡ•͈ ·̭ •͈ᐡ</Text>
            <Text style={{fontSize:15, alignSelf: 'center'}}>Earn 5 cat food first to adopt a new kitty :(</Text>

        </View>
    )
}

export default DeadCat;