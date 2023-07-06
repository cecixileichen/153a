import { Text, View } from "react-native";

const Bubble = ({hungry}) =>{
    const bubbleText = (hungry) => {
        let textcontent = "";
        if (hungry == 3) {
            textcontent = 'Feed me. Feed me. Feed me. I NEED FOOOOOOD (;´༎ຶД༎ຶ`)'
        } else if (hungry == 2){
            textcontent = 'can you give me some treat QAQ'
        } else if (hungry == 1){
            textcontent = '(*^^*)'
        } else if (hungry == 0){
            textcontent = 'awwwww! Too FULL! STOPPPP or I’ll EXPLODE!! (#ﾟДﾟ)'
        } else{
            textcontent = 'error'
        };
        return textcontent;
    }
    return(
        <View>
            <View style={{alignSelf: 'end'}}>
                <Text style={{fontSize:15}}>   {bubbleText(hungry)}</Text>
            </View>
            <View style={{alignSelf: 'center', marginRight: 30}}>
                <Text style={{fontSize:18}}>  </Text>             
            </View>
        </View>
        
    )
}

export default Bubble;