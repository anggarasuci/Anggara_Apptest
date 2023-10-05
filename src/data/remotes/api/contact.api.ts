import callApi from '../../../infrastructure/utils/call-api';
import {ContactDataDto} from '../dto/contact.dto';
import {ContactPostRequest} from '../request/contact.post.request';

class ContactApi {
  static endpoint = 'contact';

  static async getItems(): Promise<ContactDataDto[]> {
    return callApi<ContactDataDto[]>(this.endpoint);
  }

  static async create(data: ContactPostRequest): Promise<void> {
    return callApi<void>(this.endpoint, 'POST', data);
  }

  static async update(id: string, data: ContactPostRequest): Promise<void> {
    return callApi<void>(`${this.endpoint}/${id}`, 'PUT', data);
  }

  static async delete(id: string): Promise<void> {
    return callApi<void>(`${this.endpoint}/${id}`, 'DELETE');
  }
}

export default ContactApi;
