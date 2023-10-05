import ContactRepositoryImpl from '../../../src/data/repositories-impl/contact.repository.impl';
import {ContactModel} from '../../../src/domain/models/contact.model';
import ContactUseCase from '../../../src/domain/use-case/contact.usecase';

jest.mock('../../../src/data/repositories-impl/contact.repository.impl');

describe('ContactUseCase', () => {
  let contactUseCase: ContactUseCase;
  let contactRepository: jest.Mocked<ContactRepositoryImpl>;

  beforeEach(() => {
    contactRepository =
      new ContactRepositoryImpl() as jest.Mocked<ContactRepositoryImpl>;
    contactUseCase = new ContactUseCase(contactRepository);
  });

  it('should get items from repository', async () => {
    const mockContactModels: ContactModel[] = [
      {
        id: 'abc',
        firstName: 'anggara',
        lastName: 'suci',
        fullName: 'anggara suci',
        age: 2,
        photo: 'N/A',
      },
    ];
    contactRepository.getItems.mockResolvedValue(mockContactModels);

    const result = await contactUseCase.getItems();
    expect(result).toEqual(mockContactModels);
  });

  it('should submit contact successfully', async () => {
    const mockContactRequest = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      photo: 'example.jpg',
    };
    contactRepository.submit.mockResolvedValue(undefined);

    const result = await contactUseCase.submit(
      mockContactRequest.firstName,
      mockContactRequest.lastName,
      mockContactRequest.age,
      mockContactRequest.photo,
    );

    expect(result).toEqual({data: undefined});
    expect(contactRepository.submit).toHaveBeenCalledWith(
      mockContactRequest,
      undefined,
    );
  });

  it('should handle submit error', async () => {
    const errorMessage = 'Submission failed';
    contactRepository.submit.mockRejectedValue(new Error(errorMessage));

    const result = await contactUseCase.submit(
      'John',
      'Doe',
      30,
      'example.jpg',
    );

    expect(result).toEqual({error: errorMessage});
    expect(contactRepository.submit).toHaveBeenCalled();
  });

  it('should delete contact successfully', async () => {
    contactRepository.delete.mockResolvedValue(undefined);

    const result = await contactUseCase.delete('contactId');

    expect(result).toEqual({data: undefined});
    expect(contactRepository.delete).toHaveBeenCalledWith('contactId');
  });

  it('should handle delete error', async () => {
    const errorMessage = 'Deletion failed';
    contactRepository.delete.mockRejectedValue(new Error(errorMessage));

    const result = await contactUseCase.delete('contactId');

    expect(result).toEqual({error: errorMessage});
    expect(contactRepository.delete).toHaveBeenCalledWith('contactId');
  });
});
