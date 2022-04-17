import { CRUD } from './index.js';

document.querySelector('#add-new-form').addEventListener('submit', function(e) {
    e.preventDefault();

    new CRUD(
        new FormData(this)
    );
})