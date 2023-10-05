import React from 'react';
import {render} from '@testing-library/react-native';
import ConfirmationDialog from '../../../../src/presentation/components/dialog/confirmation.dialog';

test('renders ConfirmationDialog correctly', () => {
  const onCancel = jest.fn();
  const onConfirm = jest.fn();

  const {toJSON} = render(
    <ConfirmationDialog
      label="Are you sure?"
      isVisible={true}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />,
  );

  expect(toJSON()).toMatchSnapshot();
});
