import { StackNavigator, TabNavigator } from 'react-navigation';
import AllBooks from './AllBooks';
import AddBook from './AddBook';
import MyBooks from './MyBooks';
import LogOut from './LogOut';

const Navigation = TabNavigator({
    List: { screen: AllBooks },
    My: { screen: MyBooks },
    Add: { screen: AddBook },
    Out: { screen: LogOut }
  }
);

export default Navigation;
