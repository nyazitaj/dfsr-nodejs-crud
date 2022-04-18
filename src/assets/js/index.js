export class CRUD {
    constructor(ojb) {
        // return 'test';


        /* document.querySelector('#add-new-book').addEventListener('click', function(e) {
            e.preventDefault();

            this.BookList()
        }) */

        ojb.append('name', 'Nyazi');

        /* console.log(ojb.get('name')); */

        /* for (var value of ojb.values()) {
            console.log(value);
        } */
    }

    // Method for displaying the books list.
    BookList() {
        var taj;
        fetch('http://localhost:3001/list')
            .then(function (response) {
                return response.text();
            })
            .then(function (myBlob) {
                console.log(JSON.parse(myBlob));

                var myBlobParse = JSON.parse(myBlob)

                var ct = 1;
                for(var x in myBlobParse) {
                    var elemTr = document.createElement('tr');

                    // Creating "ID"
                    var elemTd1 = document.createElement('td');
                    elemTd1.innerHTML = ct;

                    // Creating "Miniatuer"
                    var elemTd2 = document.createElement('td');
                    elemTd2.setAttribute('class', 'thumbnail')
                    var elemImg = document.createElement('img');
                    elemImg.setAttribute('src', '../assets/images/' + myBlobParse[x].img)
                    elemImg.setAttribute('alt', myBlobParse[x].name)
                    elemTd2.appendChild(elemImg);

                    // Creating "Titre"
                    var elemTd3 = document.createElement('td');
                    elemTd3.innerHTML = myBlobParse[x].name;

                    // Creating "Autheur"
                    var elemTd4 = document.createElement('td');
                    elemTd4.innerHTML = myBlobParse[x].author.name;

                    // Creating "Genre"
                    var elemTd5 = document.createElement('td');
                    elemTd5.innerHTML = myBlobParse[x].genre;

                    /* // Creating "Sommaire"
                    var elemTd6 = document.createElement('td');
                    elemTd6.innerHTML = myBlobParse[x].name; */

                    // Creating "Date"
                    var elemTd7 = document.createElement('td');
                    elemTd7.innerHTML = myBlobParse[x].publish_date;

                    // Creating "Action" buttons
                    var elemTd8 = document.createElement('td');
                    elemTd8.setAttribute('class', 'action-buttons')

                    var elemSpan1 = document.createElement('span');
                    elemSpan1.setAttribute('class', 'icon-edit')
                    var elemImg1 = document.createElement('img');
                    elemImg1.setAttribute('src', '../assets/images/edit.png')
                    elemImg1.setAttribute('alt', 'Modifier')
                    elemSpan1.appendChild(elemImg1)

                    var elemSpan2 = document.createElement('span');
                    elemSpan2.setAttribute('class', 'icon-delete')
                    var elemImg2 = document.createElement('img');
                    elemImg2.setAttribute('src', '../assets/images/delete.png')
                    elemImg2.setAttribute('alt', 'Supprimer')
                    elemSpan2.appendChild(elemImg2)

                    elemTd8.appendChild(elemSpan1)
                    elemTd8.appendChild(elemSpan2)

                    elemTr.appendChild(elemTd1)
                    elemTr.appendChild(elemTd2)
                    elemTr.appendChild(elemTd3)
                    elemTr.appendChild(elemTd4)
                    elemTr.appendChild(elemTd5)
                    /* elemTr.appendChild(elemTd6) */
                    elemTr.appendChild(elemTd7)
                    elemTr.appendChild(elemTd8)

                    document.querySelector('#book-list').appendChild(elemTr);

                    ct += 1;

                }
            });
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

