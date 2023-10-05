import ContactApi from '../../../../src/data/remotes/api/contact.api';
import {ContactDataDto} from '../../../../src/data/remotes/dto/contact.dto';
import {ContactPostRequest} from '../../../../src/data/remotes/request/contact.post.request';
import callApi from '../../../../src/infrastructure/utils/call-api';

jest.mock('../../../../src/infrastructure/utils/call-api');

describe('ContactApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches items from the API', async () => {
    const mockResponse: ContactDataDto[] = [
      {
        id: '1',
        firstName: 'Anggara',
        lastName: 'Suci',
        age: 20,
        photo: 'N/A',
      },
    ];
    (callApi as jest.Mock).mockResolvedValue(mockResponse);

    const items = await ContactApi.getItems();

    expect(callApi).toHaveBeenCalledWith('contact');
    expect(items).toEqual(mockResponse);
  });

  it('creates a new contact', async () => {
    const mockRequest: ContactPostRequest = {
      firstName: 'Anggara',
      lastName: 'Nugraha',
      age: 11,
      photo: 'N/A',
    };
    (callApi as jest.Mock).mockResolvedValue(undefined);

    await ContactApi.create(mockRequest);

    expect(callApi).toHaveBeenCalledWith('contact', 'POST', mockRequest);
  });

  it('updates an existing contact', async () => {
    const mockId = '1';
    const mockRequest: ContactPostRequest = {
      firstName: 'Anggara',
      lastName: 'Suci',
      age: 10,
      photo: 'N/A',
    };
    (callApi as jest.Mock).mockResolvedValue(undefined);

    await ContactApi.update(mockId, mockRequest);

    expect(callApi).toHaveBeenCalledWith(
      `contact/${mockId}`,
      'PUT',
      mockRequest,
    );
  });

  it('deletes a contact', async () => {
    const mockId = '1';
    (callApi as jest.Mock).mockResolvedValue(undefined);

    await ContactApi.delete(mockId);

    expect(callApi).toHaveBeenCalledWith(`contact/${mockId}`, 'DELETE');
  });
});
