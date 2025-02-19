/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  let adress = '?';

  xhr.responseType = 'json';

  for (key in options.data) {
    adress += key + '=' + options.data[key] + '&';
  }

  for (key in options.data) {
    formData.append(key, options.data[key]);
  }

  try {
    if (options.method === 'GET') {
      xhr.open(options.method, options.url + adress);
      xhr.send();
    } else {
      xhr.open(options.method, options.url);
      xhr.send(formData);
    }

    xhr.onload = function () {
      options.callback(null, xhr.response);
    };
  } catch (err) {
    options.callback(err);
  }
};
