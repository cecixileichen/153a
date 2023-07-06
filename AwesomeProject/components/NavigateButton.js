import { View, Pressable } from 'react-native';
import NavigateButtonIcon from './NavigateButtonIcon';

export default function NavigateButton({ type, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <NavigateButtonIcon type={type} />
      </Pressable>
    </View>
  );
}
