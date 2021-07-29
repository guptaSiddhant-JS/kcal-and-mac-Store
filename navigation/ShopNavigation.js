import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import  ProductOverview from "../screens/shop/ProductOverview";
import Color from '../constant/Color';


const ProductNavigation = createStackNavigator({
    ProductOverview : ProductOverview
},
{
   defaultNavigationOptions:{
     headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Color.primary : ''
     },
      headerTintColor:Platform.Os === 'android' ? Color.accent : 'white',
    }
  }
);

export default createAppContainer(ProductNavigation);