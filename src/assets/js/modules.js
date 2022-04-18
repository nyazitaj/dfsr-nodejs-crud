import { CRUD } from './index.js';


// Once the page loaded totally.
window.onload = () => {
    const CrudObj = new CRUD(
        new FormData(this)
    );

    if( CrudObj.BookList() != undefined ) {
        console.log(
            CrudObj.BookList()
        );
    }
};

/* document.querySelector('#add-new-form').addEventListener('submit', function(e) {
    e.preventDefault();

    new CRUD(
        new FormData(this)
    );
}) */