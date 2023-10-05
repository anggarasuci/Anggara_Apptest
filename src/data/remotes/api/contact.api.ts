import callApi from '../../../infrastructure/utils/call-api';
import {ContactDataDto, ContactDto} from '../dto/contact.dto';
import {ContactPostRequest} from '../request/contact.post.request';
import {ContactPutRequest} from '../request/contact.put.request';

class ContactApi {
  static endpoint = 'contact';

  static async getItems(): Promise<ContactDataDto[]> {
    return callApi<ContactDataDto[]>(this.endpoint);
  }

  static async create(data: ContactPostRequest): Promise<ContactDataDto> {
    return callApi<ContactDataDto>(this.endpoint, 'POST', data);
  }

  static async update(data: ContactPutRequest): Promise<ContactDataDto> {
    return callApi<ContactDataDto>(this.endpoint, 'PUT', data);
  }

  static async delete(id: number): Promise<number> {
    return callApi<number>(`${this.delete}/${id}`, 'DELETE');
  }
}

export default ContactApi;
