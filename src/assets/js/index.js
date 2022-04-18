export class CRUD {
    constructor() {

        // Saving the "Books" list in the Javascript "localStorage", whenever we visit the website for the first time.
        if (localStorage.getItem('book_list') == null) {
            fetch('http://localhost:3001/list')
                .then(function (response) {
                    return response.text();
                })
                .then(function (myBooks) {

                    localStorage.setItem(
                        'book_list', myBooks
                    );
                });
        }

        // Showing the HTML form
        document.querySelector('#add-new').addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector("#save-modifications").innerHTML = "Ajouter"
            new CRUD().FormShow();
        })

        // Adding a new Book
        document.querySelector('#book-form').addEventListener('submit', function (e) {
            e.preventDefault();

            new CRUD().AddNewBook(e);
        })

        // Canceling the HTML form
        document.querySelector('#cancel-new').addEventListener('click', function (e) {
            e.preventDefault();

            new CRUD().FormCancel;
        })

        // Restore the default list
        document.querySelector('#clear-list').addEventListener('click', function (e) {
            e.preventDefault();

            new CRUD().ClearList;
        })
    }

    // Method for displaying the books list
    get BookList() {

        // Preparing the HTML <table> of book list received from localStorage
        var myBooksParse = JSON.parse(localStorage.getItem('book_list'))

        var ct = 1;
        for (var x in myBooksParse) {
            var elemTr = document.createElement('tr');

            // Creating "ID"
            var elemTd1 = document.createElement('td');
            elemTd1.innerHTML = ct;

            // Creating "Miniatuer"
            var elemTd2 = document.createElement('td');
            elemTd2.setAttribute('class', 'thumbnail')
            var elemImg = document.createElement('img');
            elemImg.setAttribute('src', myBooksParse[x].img)
            elemImg.setAttribute('alt', myBooksParse[x].name)
            elemTd2.appendChild(elemImg);

            // Creating "Titre"
            var elemTd3 = document.createElement('td');
            elemTd3.innerHTML = myBooksParse[x].name;

            // Creating "Autheur"
            var elemTd4 = document.createElement('td');
            elemTd4.innerHTML = myBooksParse[x].author;

            // Creating "Genre"
            var elemTd5 = document.createElement('td');
            elemTd5.innerHTML = myBooksParse[x].genre;

            // Creating "Date"
            var elemTd6 = document.createElement('td');
            elemTd6.innerHTML = myBooksParse[x].publish_date;

            // Creating "Action" buttons
            var elemTd7 = document.createElement('td');
            elemTd7.setAttribute('class', 'action-buttons')

            var elemSpan1 = document.createElement('span');
            elemSpan1.setAttribute('class', 'icon-edit')
            elemSpan1.setAttribute('btn-id', x);

            // Function to UPDATE the selected Book
            elemSpan1.addEventListener('click', function () {

                // Displaying the HTML form
                document.querySelector('#container-new-livre').classList.remove('d-none');

                // Preparing the CANCEL button
                document.querySelector('#cancel-new').addEventListener('click', function (e) {
                    e.preventDefault();
                    new CRUD().FormCancel;
                });

                // Preparing the SAVE button
                var btnDelete = document.querySelector('#save-modifications');

                btnDelete.setAttribute('btn-id', this.getAttribute('btn-id'));

                btnDelete.addEventListener('click', function (e) {
                    e.preventDefault();
                    new CRUD().UpdateBook(this.getAttribute('btn-id'));
                })

                const BookVal = myBooksParse[this.getAttribute('btn-id')];

                document.querySelector("input[name=title]").value = BookVal.name
                document.querySelector("input[name=author]").value = BookVal.author
                document.querySelector("select[name=genre]").value = BookVal.genre
                document.querySelector("input[name=thumbnail]").value = BookVal.img
                document.querySelector("input[name=date-pub]").value = BookVal.publish_date
                document.querySelector("#save-modifications").innerHTML = "Enregistrer"

                /* var elemBtn1 = document.createElement('button');
                elemBtn1.setAttribute('id', 'cancel-delete-' + x);

                var elemBtn2 = document.createElement('button');
                elemBtn2.setAttribute('id', 'cancel-edit-' + x);

                elemSpan2.appendChild(elemImg2) */

            })

            var elemImg1 = document.createElement('img');
            elemImg1.setAttribute('src', '../assets/images/edit.png')
            elemImg1.setAttribute('alt', 'Modifier')
            elemSpan1.appendChild(elemImg1)

            var elemSpan2 = document.createElement('span');
            elemSpan2.setAttribute('class', 'icon-delete')
            elemSpan2.setAttribute('btn-id', x)

            // Function to delete the selected Book
            elemSpan2.addEventListener('click', function () {

                // Displaying the delete POPUP
                document.querySelector('#container-delete-livre').classList.remove('d-none');

                // Preparing the CANCEL button
                document.querySelector('#cancel-delete').addEventListener('click', function (e) {
                    e.preventDefault();
                    new CRUD().CancelDelete;
                });

                // Preparing the CONFORM DELETE button
                var btnDelete = document.querySelector('#confirm-delete');
                btnDelete.setAttribute('btn-id', this.getAttribute('btn-id'));

                btnDelete.addEventListener('click', function (e) {
                    e.preventDefault();
                    new CRUD().DeleteBook(this.getAttribute('btn-id'));
                })

            })

            var elemImg2 = document.createElement('img');
            elemImg2.setAttribute('src', '../assets/images/delete.png')
            elemImg2.setAttribute('alt', 'Supprimer')
            elemSpan2.appendChild(elemImg2)

            elemTd7.appendChild(elemSpan1)
            elemTd7.appendChild(elemSpan2)

            elemTr.appendChild(elemTd1)
            elemTr.appendChild(elemTd2)
            elemTr.appendChild(elemTd3)
            elemTr.appendChild(elemTd4)
            elemTr.appendChild(elemTd5)
            elemTr.appendChild(elemTd6)
            elemTr.appendChild(elemTd7)
            document.querySelector('#book-list').appendChild(elemTr);

            ct += 1;

        }
    }

    // Method for adding a new Book to the Books list of localStorage
    AddNewBook(e) {

        // Creating a new list (newArray) of data recived from HTML form
        var data = new FormData(e.target);

        var newArray = {
            name: data.get('title'),
            author: data.get('author'),
            genre: data.get('genre'),
            img: data.get('thumbnail'),
            publish_date: data.get('date-pub')
        }

        // Adding the newly created list to the localStorage list
        var myBooksParse = JSON.parse(
            localStorage.getItem('book_list')
        )

        myBooksParse.push(newArray);

        localStorage.setItem(
            'book_list', JSON.stringify(myBooksParse)
        );

        document.querySelector('#container-new-livre').classList.add('d-none');

        e.target.reset();
    }

    // Showing the HTML form
    FormShow() {
        document.querySelector('#container-new-livre').classList.remove('d-none');
    }

    // Canceling the HTML form
    get FormCancel() {
        document.querySelector('#container-new-livre', '#container-delete-livre').classList.add('d-none');
    }

    // Canceling the DELETE operation
    get CancelDelete() {
        document.querySelector('#container-delete-livre').classList.add('d-none');
    }

    // Clearing the localStorage to get the default Book list
    get ClearList() {
        localStorage.clear();

        location.reload();
        new CRUD().BookList;
    }

    // Method to DELETE the selected Book
    DeleteBook(id) {
        console.log(+id);

        var myBooksParse = JSON.parse(
            localStorage.getItem('book_list')
        )

        myBooksParse.splice(+id, 1)

        localStorage.setItem(
            'book_list', JSON.stringify(myBooksParse)
        );

        document.querySelector('#book-list').innerHTML = '';
        new CRUD().BookList;

        document.querySelector('#container-delete-livre').classList.add('d-none');
    }

    // Method to UPDATE the select book
    UpdateBook(id) {

        // Creating a new list (newArray) of data recived from HTML form
        const DATA = new FormData(document.querySelector('#book-form'));

        const NewList = {
            name: DATA.get('title'),
            author: DATA.get('author'),
            genre: DATA.get('genre'),
            img: DATA.get('thumbnail'),
            publish_date: DATA.get('date-pub')
        }

        const MyBooksParse = JSON.parse(
            localStorage.getItem('book_list')
        )

        MyBooksParse[id] = NewList;

        console.log(
            MyBooksParse[id]
        );

        localStorage.setItem(
            'book_list', JSON.stringify(MyBooksParse)
        );

        document.querySelector('#book-list').innerHTML = '';
        new CRUD().BookList;

        document.querySelector('#container-new-livre').classList.add('d-none');

    }
}

