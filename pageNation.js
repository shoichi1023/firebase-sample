import { StackNavigator } from 'react-navigation';
import Input from './component/Input';
import Result from './component/Result';

export const rootCom = 'Input';

const pageNation = StackNavigator({
  Input: {
    screen:Input,
  },
  Result: {
    screen:Result,
  },
});

export default pageNation;