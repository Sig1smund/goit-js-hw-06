const form = document.querySelector('.login-form');

form.addEventListener('submit', formGatherFn);

function formGatherFn (event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;

    const mail = formElem.email.value;
    const password = formElem.password.value;

    if (mail === '' || password === '') {
        return alert('Все поля должны быть заполнены');
    }
    
    const formData = {
        mail,
        password,
    }
    console.log(formData);

    form.reset();
};

