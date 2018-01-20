import { StackNavigator, TabNavigator } from 'react-navigation';
import BookList from './BookList';
import AddBook from './AddBook';

const Navigation = TabNavigator({
    List: { screen: BookList },
    Add: { screen: AddBook }
  }
);

export default Navigation;
