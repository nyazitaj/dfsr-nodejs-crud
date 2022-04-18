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
    }

    // Method for displaying the books list
    BookList() {


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
            elemSpan1.setAttribute('btn-id', x)

            elemSpan1.addEventListener('click', function () {
                this.DeleteBook(this.getAttribute('btn-id'))
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
                var myBooksParse = JSON.parse(
                    localStorage.getItem('book_list')
                )

                myBooksParse.splice(this.getAttribute('btn-id'), 1)

                localStorage.setItem(
                    'book_list', JSON.stringify(myBooksParse)
                );

                document.querySelector('#book-list').innerHTML = '';
                new CRUD().BookList();

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
    }

    // Showing the HTML form
    FormShow() {
        document.querySelector('#container-new-livre').classList.remove('d-none');
    }

    // Canceling the HTML form
    FormCancel() {
        document.querySelector('#container-new-livre').classList.add('d-none');
    }

    // Clearing the localStorage to get the default Book list
    ClearList() {
        localStorage.clear();

        location.reload();
        new CRUD().BookList();
    }

    // _bgCouleur;
    // _taille;
    // _target;
    // _style;0

    // constructor(couleur, taille=50, target, style='square') {
    //     /* this._bgCouleur = couleur;
    //     this._taille = taille;
    //     this._target = target;
    //     this._style = style; */

    //     setCouleur(couleur);
    //     taille <=50 ? setTaille(taille): 50;
    //     setTarget(target);
    //     setStyle(style);

    //     var elemCarre = document.createElement('div');
    //     elemCarre.style.backgroundColor = getCouleur();
    //     elemCarre.style.width = getTaille();
    //     elemCarre.style.height = getTaille();

    //     document.querySelector('#' + getTarget()).appendChild(elemCarre);
    // }

    // get getCouleur() {
    //     return this._bgCouleur;
    // }

    // set setCouleur(couleur) {
    //     this._bgCouleur = couleur;
    // }

    // get getTaille() {
    //     return this._taille + 'px';
    // }

    // set setTaille(taille) {
    //     this._taille = taille;
    // }

    // get getTarget() {
    //     return this._target;
    // }

    // set setTarget(target) {
    //     this._target = target;
    // }

    // get getStyle() {
    //     return this._style;
    // }

    // set setStyle(style) {
    //     this._style = style;
    // }
}

