/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/infrastructure/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ContactScreen from './src/presentation/screens/contact/contact.screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import ContactCreateScreen from './src/presentation/screens/contact/create/contact.create';
import {RootSiblingParent} from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootSiblingParent>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Contact" component={ContactScreen} />
              <Stack.Screen
                name="Create Contact"
                component={ContactCreateScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </RootSiblingParent>
    </SafeAreaView>
  );
};

export default App;
