import {ContactModel} from '../models/contact.model';
import {ContactRepository} from '../repositories/contact.repository';

class ContactUseCase {
  constructor(private readonly repository: ContactRepository) {}

  async getItems(): Promise<ContactModel[]> {
    return this.repository.getItems();
  }
}

export default ContactUseCase;
