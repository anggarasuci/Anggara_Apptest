import React from 'react';
import {render} from '@testing-library/react-native';
import VerticalTextView from '../../../../src/presentation/components/vertical-text/vertical.text';

test('renders VerticalTextView correctly', () => {
  const {toJSON} = render(<VerticalTextView label="Label" value="Value" />);

  expect(toJSON()).toMatchSnapshot();
});
