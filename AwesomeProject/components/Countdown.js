import { Text, Alert, Vibration, View } from "react-native";
import { useEffect, useState, useRef } from "react";

import Cat2 from "./Cat2";

const Countdown = ({second, updateCountDown}) => {
    const [countdown, setCountdown] = useState(second);
    const timerId = useRef()

    const formalTime = (time) => {
        let minutes = Math.floor(time / 60)
        let seconds = Math.floor(time - minutes * 60)

        if(seconds <= 9) seconds = '0' + seconds;
        return minutes + ':' + seconds
    }

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if(countdown === 0) {
            clearInterval(timerId.current)
            Vibration.vibrate()
            alert('yayyyy! u earn 1 catfood',[{text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')}])
        }
    }, [countdown])

    return(
        <View style={{justifyContent: 'center',
                      alignItems: 'center'
                    }}>
            <Text style={{fontSize: 20}}>{formalTime(countdown)}</Text>
        </View>  
    )


}

export default Countdown;