import { StackNavigator, TabNavigator } from 'react-navigation';
import AllBooks from './AllBooks';
import AddBook from './AddBook';
import MyBooks from './MyBooks';

const Navigation = TabNavigator({
    List: { screen: AllBooks },
    My: { screen: MyBooks },
    Add: { screen: AddBook }
  }
);

export default Navigation;
