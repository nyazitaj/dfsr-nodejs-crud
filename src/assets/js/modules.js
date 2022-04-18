import { CRUD } from './index.js';

// Once the page loaded totally.
window.onload = () => {
    const CrudObj = new CRUD();

    // Displaying the Books list, while page is loaded
    if( CrudObj.BookList() != undefined ) {
        CrudObj.BookList();
    }

    // Showing the HTML form
    document.querySelector('#add-new').addEventListener('click', function(e) {
        e.preventDefault();

        CrudObj.FormShow();
    })

    // Canceling the HTML form
    document.querySelector('#cancel').addEventListener('click', function(e) {
        e.preventDefault();

        CrudObj.FormCancel();
    })

    // Adding a new Book
    document.querySelector('#book-form').addEventListener('submit', function(e) {
        e.preventDefault();

        CrudObj.AddNewBook(e);
    })

    // Restore the default list
    document.querySelector('#clear-list').addEventListener('click', function(e) {
        e.preventDefault();

        CrudObj.ClearList();
    })

};