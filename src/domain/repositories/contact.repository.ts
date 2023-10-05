import {ContactPostRequest} from '../../data/remotes/request/contact.post.request';
import {ContactModel} from '../models/contact.model';

export interface ContactRepository {
  getItems(): Promise<ContactModel[]>;
  submit(request: ContactPostRequest, id?: string): Promise<void>;
  delete(id: string): Promise<void>;
}
