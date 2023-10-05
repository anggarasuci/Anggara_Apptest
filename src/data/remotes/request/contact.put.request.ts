import {ContactPostRequest} from './contact.post.request';

export interface ContactPutRequest extends ContactPostRequest {
  id: number;
}
