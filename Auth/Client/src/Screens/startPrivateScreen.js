import { Navigation } from 'react-native-navigation';

const startSingleScreen = (username) => {
    return Navigation.setRoot({
        root: {
            stack: {
              children: [{
                component: {
                  name: "Client.PrivateScreen",
                  passProps: {username: username},
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

export default startSingleScreen;