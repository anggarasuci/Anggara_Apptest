import React from 'react';
import {render} from '@testing-library/react-native';
import InputView from '../../../../src/presentation/components/input/input';

test('renders InputView correctly', () => {
  const onTextChange = jest.fn();

  const {toJSON} = render(
    <InputView
      label="Label"
      value=""
      placeholder="Placeholder"
      onTextChange={onTextChange}
    />,
  );

  expect(toJSON()).toMatchSnapshot();
});
