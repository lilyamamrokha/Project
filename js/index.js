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

document.querySelector('#home .btn.btn-primary')
    .addEventListener('click', rundomPrediction);
function rundomPrediction() {
    let phrases = [
        "Замов торт \"Шоколадний\", смак тебе здивує!",
        "Можливо не сьогодні?",
        "Яке солодке? Топай в зал!!!",
        "Тобі не зашкодить кілька сотень тістечок:)",
        "Чізкейк просто неймовірний!",
        "Еклери - це те, що тобі треба!",
        "Глянь, що радять наші постійні клієнти! Вони знають, що найсмачніше)"
    ];
    let randomWord = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementsByClassName("modal-body")[0].innerHTML=randomWord;
}
 