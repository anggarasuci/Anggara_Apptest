import {ContactModel} from '../../domain/models/contact.model';
import {ContactRepository} from '../../domain/repositories/contact.repository';
import ContactApi from '../remotes/api/contact.api';
import {convertToContactModel} from '../remotes/dto/contact.dto';
import {ContactPostRequest} from '../remotes/request/contact.post.request';

class ContactRepositoryImpl implements ContactRepository {
  async getItems(): Promise<ContactModel[]> {
    const result = (await ContactApi.getItems())?.map(item =>
      convertToContactModel(item),
    );
    return result;
  }

  async submit(request: ContactPostRequest, id?: string) {
    if (id) {
      return await ContactApi.update(id, request);
    } else {
      return await ContactApi.create(request);
    }
  }
  async delete(id: string): Promise<void> {
    return await ContactApi.delete(id);
  }
}

export default ContactRepositoryImpl;
