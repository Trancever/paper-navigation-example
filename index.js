import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Overview from './Overview';
import HOC from './HOC';

const routes = [
  { id: 'navigation.playground.Home', component: Home },
  { id: 'navigation.playground.Overview', component: Overview },
];

routes.forEach(route => {
  Navigation.registerComponent(route.id, () => HOC(route.component));
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
