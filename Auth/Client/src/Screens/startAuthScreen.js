import { Navigation } from 'react-native-navigation';

const startAuthScreen = () => {
    return Navigation.setRoot({
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
    })
};

export default startAuthScreen;