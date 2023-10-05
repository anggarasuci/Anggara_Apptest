import {useEffect} from 'react';
import ContactRepositoryImpl from '../../../data/repositories-impl/contact.repository.impl';
import ContactUseCase from '../../../domain/use-case/contact.usecase';
import {useDispatch, useSelector} from 'react-redux';
import ContactAction from '../../../infrastructure/redux/actions/contact.action';
import {RootState} from '../../../infrastructure/redux/store';

const ContactViewModel = () => {
  const contactRepository: ContactRepositoryImpl = new ContactRepositoryImpl();
  const contactUseCase: ContactUseCase = new ContactUseCase(contactRepository);
  const {setContacts} = ContactAction();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.contact);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const result = await contactUseCase.getItems();
    dispatch(setContacts(result));
  };

  return {
    items,
  };
};

export {ContactViewModel};
