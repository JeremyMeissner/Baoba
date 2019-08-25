import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../components/HomeScreen.js'
import PersonalizationScreen from '../components/PersonalizationScreen.js'
import LocationScreen from '../components/LocationScreen.js'
import SurchargeScreen from '../components/SurchargeScreen.js'
import SummaryScreen from '../components/SummaryScreen.js'

const SearchStackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Personalization: { screen: PersonalizationScreen },
  Location: { screen: LocationScreen },
  Surcharge: { screen: SurchargeScreen },
  Summary: { screen: SummaryScreen },
},
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
}
})

export default createAppContainer(SearchStackNavigator)
