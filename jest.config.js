module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  // },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@react-navigation/native-stack/(.*)$': '<rootDir>/__mocks__/$1',
    '^react-native-root-toast$':
      '<rootDir>/__mocks__/react-native-root-toast.js',
    '^react-native-root-siblings$':
      '<rootDir>/__mocks__/react-native-root-siblings.js',
  },
  resolver: undefined,
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
