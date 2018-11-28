import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const tabBasedMenu = () => {
  Promise.all([
    Icon.getImageSource('home',30),
    Icon.getImageSource('user',30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
        tabs: [
          {
            screen: "rnawesome.HomeScreen",
            label: "Home",
            title: "Home",
            icon: sources[0]
          },
          {
            screen: "rnawesome.ProfileScreen",
            label: "Profile",
            title: "Profile",
            icon: sources[1]
          }
        ]
      })
    }
  )
  };
  

export default tabBasedMenu;