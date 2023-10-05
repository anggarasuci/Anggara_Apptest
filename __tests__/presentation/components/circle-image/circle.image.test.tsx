import React from 'react';
import {render} from '@testing-library/react-native';
import CircleImageView from '../../../../src/presentation/components/circle-image/circle.image';

test('renders CircleImageView correctly', () => {
  const {toJSON} = render(
    <CircleImageView url="https://example.com/image.jpg" />,
  );

  expect(toJSON()).toMatchSnapshot();
});
