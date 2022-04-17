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

        fetch('http://localhost:3001/liste')
            .then(function (response) {
                return response.text();
            })
            .then(function (myBlob) {
                console.log(JSON.parse(myBlob))
            });
    }

    get BookList() {
        console.log('ojb');
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

