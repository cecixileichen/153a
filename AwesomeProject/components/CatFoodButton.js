import react from 'react';
import {Button,Text,View} from 'react-native';

const CatFoodButton = ({catFood, updateCatFood, storeData}) => {
    return (
      <View style={{alignContent: 'center',
                    margin: 20}}>
        <Text style={{marginLeft: 10}}>
          {catFood} catfood left.
        </Text>
        <Button
          onPress={() => {
            updateCatFood(catFood-1);
            storeData(catFood-1);
          }}
          disabled={catFood == 0}
          title={'Feed Me Mooooooore!!'}
          color='#BBBBF0'
        />
       </View>
    );
  };

export default CatFoodButton
