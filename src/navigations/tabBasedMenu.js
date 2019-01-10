import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const tabBasedMenu = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-home' : 'ios-home',30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-person' : 'ios-person',30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
        tabs: [
          {
            screen: "rnawesome.HomeScreen",
            label: "Home",
            title: "Home",
            icon: sources[0],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: sources[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
                }
              ]
            },
          },
          {
            screen: "rnawesome.ProfileScreen",
            label: "Profile",
            title: "Profile",
            icon: sources[1],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: sources[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
                }
              ]
            }
          }
        ],
        tabsStyle: {
          tabBarSelectedButtonColor: "orange"
        },
        drawer: {
          left: {
            screen: "rnawesome.SideDrawer"
          }
        },
        appStyle: {
          tabBarSelectedButtonColor: "orange"
        }
      })
    }
  )
  };
  

export default tabBasedMenu;