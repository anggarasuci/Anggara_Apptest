import {ContactModel} from '../../../domain/models/contact.model';

export interface ContactDataDto {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
}

export const convertToContactModel = (dto: ContactDataDto): ContactModel => {
  const contactModel: ContactModel = {
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    fullName: `${dto.firstName} ${dto.lastName}`,
    age: dto.age,
    photo: dto.photo,
  };
  return contactModel;
};
