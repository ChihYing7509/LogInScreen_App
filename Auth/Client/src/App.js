import { Navigation } from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import startPrivate from './Screens/startPrivateScreen.js';

import AuthScreen from './Screens/AuthScreen';
import CreateAnAccount from './Screens/CreateAnAccount';
import PrivateScreen from './Screens/Private';

import Config from 'react-native-config';

Navigation.registerComponent(`Client.AuthScreen`, () => AuthScreen);
Navigation.registerComponent(`Client.CreateAnAccount`, () => CreateAnAccount);
Navigation.registerComponent(`Client.PrivateScreen`, () => PrivateScreen);

AsyncStorage.getItem('x-auth').then(token => {
  axios
    .get(`http:${Config.IP_Address}:3000/private/private`, {
      headers: {
        'x-auth': token,
      },
    })
    .then(response => {
      if (response.status == 200) {
        return startPrivate();
      }
      return Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            stack: {
              children: [{
                component: {
                  name: "Client.AuthScreen",
                  options: {
                      topBar: {
                          visible: false,
                      }
                  }
                }
              }]
            }
          }
        });
      });
    })
    .catch(() => {
      return Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            stack: {
              children: [{
                component: {
                  name: "Client.AuthScreen",
                  options: {
                      topBar: {
                          visible: false,
                      }
                  }
                }
              }]
            }
          }
        });
      });
    });
});

