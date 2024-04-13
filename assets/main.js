document.addEventListener("DOMContentLoaded", function (event) {

    update();

    remove();
});

function update() {
    let cards = document.querySelectorAll('.cards .card .update');
    if (cards != null) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', (e) => {

                let idValue = e.target.getAttribute('data-id');
                let titleValue = e.target.parentNode.querySelector('.card-title').innerText;
                let descriptionValue = e.target.parentNode.querySelector('.card-description').innerText;

                let form = document.querySelector('#form-notes');

                if (form != null) {
                    let id = form.querySelector('input#id');
                    let title = form.querySelector('input#title');
                    let description = form.querySelector('textarea#description');

                    id.value = idValue;
                    title.value = titleValue;
                    description.value = descriptionValue;

                }
            });
        }
    }
}

function remove() {
    let cards = document.querySelectorAll('.cards .card .delete');
    if (cards != null) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', (e) => {

                let idValue = e.target.getAttribute('data-id');
                console.log(idValue);
                fetch('/delete-notes/' + idValue, {method: "DELETE"})
                    .then((resp) => resp.json())
                    .then((data) => window.location.href = data.routeRacine)
                    .catch((error) => console.log(error));
            });
        }
    }
}