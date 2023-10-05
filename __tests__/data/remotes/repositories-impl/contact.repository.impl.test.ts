import ContactRepositoryImpl from '../../../../src/data/repositories-impl/contact.repository.impl';
import {ContactDataDto} from '../../../../src/data/remotes/dto/contact.dto';
import * as ContactDtoModule from '../../../../src/data/remotes/dto/contact.dto';
import ContactApi from '../../../../src/data/remotes/api/contact.api';
import {ContactModel} from '../../../../src/domain/models/contact.model';

jest.mock('../../../../src/data/remotes/api/contact.api');

describe('ContactRepositoryImpl', () => {
  let contactRepository: ContactRepositoryImpl;

  beforeEach(() => {
    contactRepository = new ContactRepositoryImpl();
  });

  it('should get items from API and convert them to ContactModel', async () => {
    const mockApiItems: ContactDataDto[] = [
      {
        id: '',
        firstName: '',
        lastName: '',
        age: 0,
        photo: '',
      },
    ];
    const mockContactModels: ContactModel[] = [
      {
        id: '1',
        firstName: 'tes',
        lastName: 'aa',
        fullName: 'tes aa',
        age: 2,
        photo: 'N/A',
      },
    ];

    jest.spyOn(ContactApi, 'getItems').mockResolvedValue(mockApiItems);
    jest.spyOn(ContactDtoModule, 'convertToContactModel').mockReturnValue({
      id: '1',
      firstName: 'tes',
      lastName: 'aa',
      fullName: 'tes aa',
      age: 2,
      photo: 'N/A',
    });

    const result = await contactRepository.getItems();
    expect(result).toEqual(mockContactModels);
    expect(ContactApi.getItems).toHaveBeenCalled();
  });

  it('should submit new contact to API', async () => {
    const mockRequest = {
      firstName: '',
      lastName: '',
      age: 0,
      photo: '',
    };

    await contactRepository.submit(mockRequest);

    expect(ContactApi.create).toHaveBeenCalledWith(mockRequest);
  });

  it('should update contact via API', async () => {
    const mockId = '123';
    const mockRequest = {
      firstName: '',
      lastName: '',
      age: 0,
      photo: '',
    };

    await contactRepository.submit(mockRequest, mockId);

    expect(ContactApi.update).toHaveBeenCalledWith(mockId, mockRequest);
  });

  it('should delete contact via API', async () => {
    const mockId = '123';

    await contactRepository.delete(mockId);

    expect(ContactApi.delete).toHaveBeenCalledWith(mockId);
  });
});
