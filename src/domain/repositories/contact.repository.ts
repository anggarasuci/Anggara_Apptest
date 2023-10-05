import {ContactPostRequest} from '../../data/remotes/request/contact.post.request';
import {ContactPutRequest} from '../../data/remotes/request/contact.put.request';
import {ContactModel} from '../models/contact.model';

export interface ContactRepository {
  getItems(): Promise<ContactModel[]>;
  create(request: ContactPostRequest): Promise<ContactModel>;
  update(request: ContactPutRequest): Promise<ContactModel>;
  delete(id: number): Promise<number>;
}
