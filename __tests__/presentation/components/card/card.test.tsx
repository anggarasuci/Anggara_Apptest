import React from 'react';
import {render} from '@testing-library/react-native';
import CardView from '../../../../src/presentation/components/card/card';

test('renders CardView correctly', () => {
  const {toJSON} = render(<CardView>{}</CardView>);

  expect(toJSON()).toMatchSnapshot();
});
