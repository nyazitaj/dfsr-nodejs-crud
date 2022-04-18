import { CRUD } from './index.js';

// Once the page loaded totally.
window.onload = () => {
    /* const CrudObj = new CRUD(); */

    // Displaying the Books list, while page is loaded
    if(  new CRUD().BookList != undefined ) {
         new CRUD().BookList;
    }

};