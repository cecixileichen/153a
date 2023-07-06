import { Text, View, StyleSheet } from "react-native";

const NavigateButtonIcon = ({type}) =>{
    return(
        <View style={styles.container}>
            {type ?
            <>
            <Text style={styles.emoji}>٩(˃̶͈̀௰˂̶͈́)و</Text>
            <Text style={styles.text}>FocusClock</Text>
            </>
            : 
            <>
            <Text style={styles.emoji}>๑ᵒᯅᵒ๑</Text>
            <Text style={styles.text}>ToDoList</Text>
            </>
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 25,
    },
    text: {
        fontSize: 12,
    }
})
export default NavigateButtonIcon;