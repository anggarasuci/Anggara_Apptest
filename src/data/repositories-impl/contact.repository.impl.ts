import {ContactModel} from '../../domain/models/contact.model';
import {ContactRepository} from '../../domain/repositories/contact.repository';
import ContactApi from '../remotes/api/contact.api';
import {convertToContactModel} from '../remotes/dto/contact.dto';
import {ContactPostRequest} from '../remotes/request/contact.post.request';
import {ContactPutRequest} from '../remotes/request/contact.put.request';

class ContactRepositoryImpl implements ContactRepository {
  async getItems(): Promise<ContactModel[]> {
    const result = (await ContactApi.getItems())?.map(item =>
      convertToContactModel(item),
    );
    return result;
  }
  create(request: ContactPostRequest): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }
  update(request: ContactPutRequest): Promise<ContactModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<number> {
    throw new Error('Method not implemented.');
  }
}

export default ContactRepositoryImpl;
