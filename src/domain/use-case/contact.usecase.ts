import {ContactPostRequest} from '../../data/remotes/request/contact.post.request';
import {ContactModel} from '../models/contact.model';
import {ContactRepository} from '../repositories/contact.repository';

interface UseCaseResult<T> {
  data?: T;
  error?: string;
}

class ContactUseCase {
  constructor(private readonly repository: ContactRepository) {}

  async getItems(): Promise<ContactModel[]> {
    return this.repository.getItems();
  }

  async submit(
    firstName: string,
    lastName: string,
    age: number,
    photoUrl: string,
    id?: string,
  ): Promise<UseCaseResult<void>> {
    const request: ContactPostRequest = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: photoUrl,
    };
    try {
      const data = await this.repository.submit(request, id);
      return {data};
    } catch (error: any) {
      return {error: error.message};
    }
  }

  async delete(id: string): Promise<UseCaseResult<void>> {
    try {
      const data = await this.repository.delete(id);
      return {data};
    } catch (error: any) {
      return {error: error.message};
    }
  }
}

export default ContactUseCase;
