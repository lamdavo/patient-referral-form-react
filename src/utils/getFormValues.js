const getFormValues = (form) => {
    const formData = new FormData(form);

    const values = [...formData.values()];
    const isEmpty = values.includes('');
    const data = Object.fromEntries(formData);
    return { data, isEmpty };
};

export default getFormValues;