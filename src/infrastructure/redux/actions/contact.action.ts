import {ContactModel} from '../../../domain/models/contact.model';

export const ContactActionType = {
  SETS: 'SET_CONTACTS',
  SET: 'SET_CONTACT',
  UPDATE: 'UPDATE_CONTACT',
  DELETE: 'DELETE_CONTACT',
};

const ContactAction = () => {
  const setContacts = (data: ContactModel[]) => ({
    type: ContactActionType.SETS,
    payload: data,
  });

  const setContact = (data: ContactModel) => ({
    type: ContactActionType.SET,
    payload: data,
  });

  const updateContact = (data: ContactModel) => ({
    type: ContactActionType.UPDATE,
    payload: data,
  });

  const deleteContact = (id: number) => ({
    type: ContactActionType.DELETE,
    payload: id,
  });

  return {
    setContacts,
    setContact,
    updateContact,
    deleteContact,
  };
};

export default ContactAction;
