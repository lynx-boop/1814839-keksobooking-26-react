const createDataLoader = (onSuccess, onError) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Не удалось загрузить данные с сервера! Ошибка: ${response.status} ${response.statusText}`);
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((err) => {
      onError(err.message);
    });
};

export { createDataLoader };
