import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./screens/SearchScreen";
import ResultScreen from "./screens/ResultScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
