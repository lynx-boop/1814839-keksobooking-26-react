const mapFiltersForm = document.querySelector('.map__filters');

const inizializeFilterForm = (fetchData, updateData) => {
  mapFiltersForm.addEventListener('change', () => {
    fetchData().then(async (httpresponse) => {
      const data = await httpresponse.json();
      // описывает фильтры
      let filteredData = data.filter((item) => {
        const formValue = mapFiltersForm.elements['housing-guests'].value;
        return formValue === 'any' || item.offer.guests === parseInt(formValue, 10);
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-type'].value;
        return formValue === 'any' || item.offer.type === formValue;
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-price'].value;
        return formValue === 'any' || (item.offer.price < 10000 && formValue === 'low')
          || (item.offer.price >= 50000 && formValue === 'high')
          || (item.offer.price >= 10000 && item.offer.price < 50000 && formValue === 'middle');
      }).filter((item) => {
        const formValue = mapFiltersForm.elements['housing-rooms'].value;
        return formValue === 'any' || item.offer.rooms === parseInt(formValue, 10);
      });

      mapFiltersForm.elements['features'].forEach((feature) => {
        if (feature.checked) {
          filteredData = filteredData.filter((item) => item.offer.features && item.offer.features.includes(feature.value));
        }
      });

      updateData(filteredData);
    });
  });
};

export { inizializeFilterForm };
