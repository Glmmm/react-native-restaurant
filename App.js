import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
