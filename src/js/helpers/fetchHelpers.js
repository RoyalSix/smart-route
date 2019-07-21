import fetch from 'node-fetch';
export const API_URL = process.env.API_URL;

export function makeRequest(url, data) {
  let method, setNoAuth, headers = {
  };
  let error = false;
  if (!data) method = 'GET';
  else method = 'POST';
  var self = {
    send: () => {
      return new Promise(async (resolve, reject) => {
        let authToken;
        var option = {
          method: method,
          mode: 'cors',
          headers: headers
        };
        if (method === 'GET' && data) {
          url += '?' + getQueryString(data);
        }
        else if (method === 'PUT' || method === 'POST' || method === 'PATCH' || (method === 'DELETE' && data)) {
          if (data) {
            option.body = JSON.stringify(data);
            headers['Content-Type'] = 'application/json';
          }
        }
        fetch(url, option).then((response) => {
          if (response.status >= 400) error = true;
          return response.text();
        }).then((body) => {
          let result = body;
          try {
            result = JSON.parse(body);
          } catch (e) {
            //
          }
          if (error) return reject(result);
          return resolve(result);
        })
          .catch((err) => {
            return reject(err.message || err);
          });
      });
    },
    addHeader: (key, value) => {
      if (value) headers[key] = value;
      return self;
    },
    setMethod: (type) => {
      method = type;
      return self;
    }
  };
  return self;
}

export function getQueryString(query) {
  let esc = encodeURIComponent;
  let queryString = Object.keys(query)
    .map(k => esc(k) + '=' + esc(query[k]))
    .join('&');
  return queryString;
}