const formOfAdvert = document.querySelector('.ad-form');
const formOfAdvertFields = formOfAdvert.querySelectorAll('fieldset');
const filtersOfAdverts = document.querySelector('.map__filters');
const filtersOfAdvertsFields = filtersOfAdverts.querySelectorAll('fieldset');

// активация и деактивация формы

const disableFormFields = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = true;
  });
  node.classList.add('ad-form--disabled');
};

const enableFormFields = (elementsArray, node) => {
  elementsArray.forEach((element) => {
    element.disabled = false;
  });
  node.classList.remove('ad-form--disabled');
};

const disableForm = () => {
  disableFormFields(formOfAdvertFields, formOfAdvert);
  disableFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

const enableForm = () => {
  enableFormFields(formOfAdvertFields, formOfAdvert);
  enableFormFields(filtersOfAdvertsFields, filtersOfAdverts);
};

// валидация формы

const titlePristine = new Pristine(formOfAdvert,
  {
    classTo: 'ad-form__label',
    errorTextParent: 'ad-form__label',
    errorTextClass: 'ad-form__label--error'
  });

formOfAdvert.addEventListener('submit', (evt) => {
  evt.preventDefault();
  titlePristine.validate();
});

export { disableForm, enableForm };
