import { Text, View, StyleSheet } from "react-native";

const Cat2 = () =>{
    return(
        <View style={{marginRight: 100}}>
            <Text style={styles.textstyle}>　　　　　／＞　　フ</Text>
            <Text style={styles.textstyle}>　　　　　|  　_　 _ l</Text> 
            <Text style={styles.textstyle}>　 　　　／` ミ＿꒳ノ</Text>
            <Text style={styles.textstyle}>　　 　 /　　　 　 |</Text>
            <Text style={styles.textstyle}>　　　 /　 ヽ　　 ﾉ</Text>
            <Text style={styles.textstyle}>        　 │　　|　|　|</Text>
            <Text style={styles.textstyle}>　／￣|　　 |　|　|</Text>
            <Text style={styles.textstyle}>　| (￣ヽ＿_ヽ_)__)</Text>
            <Text style={styles.textstyle}>　＼二つ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
      fontSize:20
    },
})

export default Cat2;