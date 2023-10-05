import {useCallback, useEffect, useState} from 'react';
import ContactRepositoryImpl from '../../../data/repositories-impl/contact.repository.impl';
import ContactUseCase from '../../../domain/use-case/contact.usecase';
import {useDispatch, useSelector} from 'react-redux';
import ContactAction from '../../../infrastructure/redux/actions/contact.action';
import {RootState} from '../../../infrastructure/redux/store';
import {ContactState} from '../../../infrastructure/redux/reducers/contact.reducer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-root-toast';

const ContactViewModel = () => {
  const contactRepository: ContactRepositoryImpl = new ContactRepositoryImpl();
  const contactUseCase: ContactUseCase = new ContactUseCase(contactRepository);
  const {setContacts, refreshContacts, deleteContact} = ContactAction();
  const dispatch = useDispatch();
  const state: ContactState = useSelector((state: RootState) => state.contact);
  const navigation = useNavigation();

  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    getItems();
  }, []);

  useFocusEffect(() => {
    if (state?.isRefreshState) {
      getItems();
      dispatch(refreshContacts(false));
    }
  });

  const getItems = async () => {
    const result = await contactUseCase.getItems();
    dispatch(setContacts(result));
  };

  const onNavigateToCreatePage = useCallback((id?: string) => {
    navigation.navigate('Create Contact', {id: id});
  }, []);

  const onDeleteClicked = useCallback((id: string) => {
    setSelectedId(id);
    setIsDeleteDialogVisible(true);
  }, []);

  const onConfirmDelete = useCallback(async () => {
    const result = await contactUseCase.delete(selectedId);
    Toast.show(result.error ?? 'Success Deleted', {
      duration: Toast.durations.SHORT,
    });

    if (!result?.error) {
      dispatch(deleteContact(selectedId));
    }
    setIsDeleteDialogVisible(false);
  }, [selectedId, dispatch]);

  return {
    items: state?.items ?? [],
    isDeleteDialogVisible,
    onNavigateToCreatePage,
    onDeleteClicked,
    onConfirmDelete,
    setIsDeleteDialogVisible,
  };
};

export {ContactViewModel};
