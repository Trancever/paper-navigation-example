import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Overview from './Overview';

Navigation.registerComponent(`navigation.playground.Home`, () => Home);
Navigation.registerComponent(`navigation.playground.Overview`, () => Overview);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.Home',
            },
          },
        ],
      },
    },
  });
});
