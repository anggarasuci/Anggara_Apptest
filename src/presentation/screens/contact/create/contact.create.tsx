import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ContactCreateViewModel} from './contact.create.viewmodel';
import {useRoute} from '@react-navigation/native';
import {contactCreateStyle as styles} from './contact.create.style';
import InputView from '../../../components/input/input';
import {Regex, Validation} from '../../../../infrastructure/utils/validation';

const ContactCreateScreen = () => {
  const route = useRoute();
  const {
    firstName,
    lastName,
    age,
    photoUrl,
    setFirstName,
    setLastName,
    setAge,
    setPhotoUrl,
    onSubmit,
  } = ContactCreateViewModel(route.params?.id);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <InputView
          label={'First Name'}
          value={firstName}
          regex={Regex.name}
          errorMessage="Alphabet only, min 3 char or more"
          placeholder={'type here...'}
          onTextChange={setFirstName}
        />
        <InputView
          label={'Last Name'}
          value={lastName}
          regex={Regex.name}
          errorMessage="Alphabet only, min 3 char or more"
          placeholder={'type here...'}
          onTextChange={setLastName}
        />
        <InputView
          label={'Age'}
          value={age?.toString() ?? ''}
          inputMode="numeric"
          placeholder={'type here...'}
          onTextChange={value => setAge(Number(value ?? '0'))}
        />
        <InputView
          label={'Photo Url'}
          value={photoUrl}
          inputMode="url"
          placeholder={'type here...'}
          onTextChange={setPhotoUrl}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.submitButton}
          onPress={onSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ContactCreateScreen;
