import Axios from 'axios';

export const HttpMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  // DELETE: 'delete',
};

export default class ApiConfig {
  static request({data, query, path, method, url, role}) {
    try {
      if (isEmpty(method) || isEmpty(url)) {
        console.log('HTTP Method 와 URL 을 확인해주세요.');
        return;
      }

      if (path) {
        for (const [key, value] of Object.entries(path)) {
          url = url.replace(`:${key}`, value);
        }
      }

      if (!isEmpty(query)) {
        url +=
          '?' +
          Object.keys(query)
            .map(key => key + '=' + query[key])
            .join('&');
      }

      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Access-Token':
        //   async스토리지에 저장필요
      };
      const noJwtHeaders = {
        'Content-Type': 'application/json',
      };
      // console.log(method);
      switch (method) {
        case HttpMethod.GET:
          return Axios.get(url, {headers: headers});
        case HttpMethod.POST:
          return Axios.post(url, data, {headers: headers});
        case HttpMethod.NO_JWT_POST:
          return Axios.post(url, data, {headers: noJwtHeaders});
        case HttpMethod.PATCH:
          return Axios.patch(url, data, {headers: headers});
        case HttpMethod.PUT:
          return Axios.put(url, data, {headers: headers});
        // case HttpMethod.DELETE:
        //   return Axios.delete(url, data, {headers: headers})
        default:
          break;
      }
    } catch (error) {
      console.log('ApiConfig Error : ', error.message);
    }
  }
}

const isEmpty = function (value) {
  return (
    value === '' ||
    value === null ||
    value === undefined ||
    (typeof value === 'object' && !Object.keys(value).length)
  );
};
