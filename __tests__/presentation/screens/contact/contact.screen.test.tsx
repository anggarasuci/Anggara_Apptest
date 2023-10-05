import React from 'react';
import {render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ContactScreen from '../../../../src/presentation/screens/contact/contact.screen'; // Import the component you want to test
import {initialState} from '../../../../src/infrastructure/redux/reducers/contact.reducer'; // Import your initial Redux state

const mockStore = configureStore([]);

test('renders ContactScreen correctly', () => {
  const store = mockStore(initialState);

  const {toJSON} = render(
    <Provider store={store}>
      <NavigationContainer>
        <ContactScreen />
      </NavigationContainer>
    </Provider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
