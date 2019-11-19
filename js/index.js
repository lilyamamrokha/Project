document.querySelector('.text-form button[type=button]')
    .addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('makeorder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.text-form input[name=userName]').value,
            email: document.querySelector('.text-form input[name=userMail]').value,
            message: document.querySelector('.text-form textarea[name=userMessage]').value
        })
    })
        .then(_ => document.querySelector('.text-form').reset());
}
 