import {ContactModel} from '../../../domain/models/contact.model';

export const ContactActionType = {
  SETS: 'SET_CONTACTS',
  SET: 'SET_CONTACT',
  UPDATE: 'UPDATE_CONTACT',
  DELETE: 'DELETE_CONTACT',
  GET: 'GET_CONTACT',
  GETS: 'GET_CONTACTS',
  REFRESH: 'REFRESH_CONTACT',
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

  const deleteContact = (id: string) => ({
    type: ContactActionType.DELETE,
    payload: id,
  });

  const getContact = (id: string) => ({
    type: ContactActionType.GET,
    payload: id,
  });

  const getContacts = () => ({
    type: ContactActionType.GETS,
  });

  const refreshContacts = (isRefresh: boolean) => ({
    type: ContactActionType.REFRESH,
    payload: isRefresh,
  });

  return {
    setContacts,
    setContact,
    updateContact,
    deleteContact,
    getContact,
    getContacts,
    refreshContacts,
  };
};

export default ContactAction;
