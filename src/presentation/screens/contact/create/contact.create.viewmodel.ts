import {useCallback, useEffect, useState} from 'react';
import ContactAction from '../../../../infrastructure/redux/actions/contact.action';
import ContactRepositoryImpl from '../../../../data/repositories-impl/contact.repository.impl';
import ContactUseCase from '../../../../domain/use-case/contact.usecase';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../infrastructure/redux/store';
import {ContactState} from '../../../../infrastructure/redux/reducers/contact.reducer';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-root-toast';

const ContactCreateViewModel = (id?: string) => {
  const contactRepository: ContactRepositoryImpl = new ContactRepositoryImpl();
  const contactUseCase: ContactUseCase = new ContactUseCase(contactRepository);
  const {updateContact, getContact, refreshContacts} = ContactAction();
  const dispatch = useDispatch();
  const state: ContactState = useSelector((state: RootState) => state.contact);
  const navigate = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState<number>();
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(getContact(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (state.selectedItem && id) {
      setDefaultValue();
    }
  }, [state.selectedItem]);

  const setDefaultValue = useCallback(() => {
    const data = state.selectedItem;
    if (data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setAge(data.age);
      setPhotoUrl(data.photo);
    }
  }, [state.selectedItem]);

  const onSubmit = async () => {
    const photo = photoUrl === '' ? 'N/A' : photoUrl;
    const result = await contactUseCase.submit(
      firstName,
      lastName,
      age ?? 0,
      photo,
      id,
    );

    Toast.show(result.error ?? 'Success', {
      duration: Toast.durations.SHORT,
    });

    if (!result.error) {
      dispatch(
        id
          ? updateContact({
              id: id,
              firstName: firstName,
              lastName: lastName,
              fullName: `${firstName} ${lastName}`,
              age: age ?? 0,
              photo: photo,
            })
          : refreshContacts(true),
      );
      navigate.goBack();
    }
  };

  return {
    firstName,
    lastName,
    age,
    photoUrl,
    setFirstName,
    setLastName,
    setAge,
    setPhotoUrl,
    onSubmit,
  };
};

export {ContactCreateViewModel};
