import React, {useState} from 'react';
import {inputStyle as styles} from './input.style';
import {InputModeOptions, Text, TextInput, View} from 'react-native';
import {Validation} from '../../../infrastructure/utils/validation';

interface InputViewProps {
  label: string;
  value: string;
  placeholder: string;
  inputMode?: InputModeOptions;
  regex?: RegExp;
  errorMessage?: string;
  onTextChange: (value: string) => void;
}

const InputView: React.FC<InputViewProps> = ({
  label,
  value,
  placeholder,
  inputMode,
  regex,
  errorMessage,
  onTextChange,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleOnTextChange = (value: string) => {
    if (regex) {
      setIsValid(Validation.isValid(value, regex));
    }
    onTextChange?.(value);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, !isValid ? {color: 'red'} : null]}>
        {label}
      </Text>
      <TextInput
        inputMode={inputMode ?? 'none'}
        style={[styles.input, !isValid ? {borderColor: 'red'} : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleOnTextChange}
      />
      {!isValid && <Text style={styles.errorLabel}>{errorMessage}</Text>}
    </View>
  );
};

export default InputView;
