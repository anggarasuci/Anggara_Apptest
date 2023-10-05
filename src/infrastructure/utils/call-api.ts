import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

async function callApi<T>(
  url: string,
  method: HttpMethod = 'GET',
  data?: any,
): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url: `https://contact.herokuapp.com/${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST' || method === 'PUT') {
    config.data = data;
  }

  return axios(config)
    .then((response: AxiosResponse<ApiResponse<T>>) => {
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      return response.data.data ?? ({} as T);
    })
    .catch(error => {
      console.error('API error:', error.message);
      throw error;
    });
}

export default callApi;
