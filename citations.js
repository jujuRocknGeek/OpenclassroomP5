// message de bienvenue
console.log("BIENVENUE DANS LE GENERATEUR DE CITATIONS\nSTAR WARS / KAAMELOTT");

// Presentation du générateur
console.log("Vous allez avoir la possibilité de choisir entre deux types de citations générées aléatoirements:\n soit des citations de Yoda du film STAR WARS,\n soit des citations du Roi Loth d'Orcanie, de la Série KAAMELOTT!");
ProgCitations();

function ProgCitations() {
    do {
        // choix du TYPE de Citations voulues
        var choixCitations = prompt("Pour des citations De Yoda TAPEZ 1,\nPour des citations du Roi Loth TAPEZ 2");

        // conditions selon le choix de citations
        if (choixCitations == 1) {
            Yoda();
        } else if (choixCitations == 2) {
            Loth();
        }
    }
    while (!(choixCitations == 1 || choixCitations == 2))


    //fonction générateur de phrases de Star Wars
    function Yoda() {

        //Extraits des citations
        var citPart1 = [
            "Dans sa lutte de pouvoir",
            "En enviant l’univers",
            "Pour garder son poste",
            "Pour lutter contre l’ennemi",
            "Dans son attitude hautaine",
            "Pour la victoire des Siths",
            "Pour la victoire de l’empire",
            "Afin de changer notre galaxie",
            "La force étant forte dans cette personne",
            "Avec toute sa volonté de vivre"
        ]

        var citPart2 = [
            " et par passion pour le côté obscur,",
            " et pour un avenir plus sûr,",
            " ou pour exercer toute sa puissance,",
            " ou pour combattre contre lui-même,",
            " et en agissant avec tant de détermination,",
            " et dans son rôle dans cette guerre,",
            " et pour conforter le soutient de sa communauté,",
            " ou son esprit étant manipulé par le coté obscur de la force,",
            " car son attitude est particulièrement étrange,",
            " car son âme est lié au côté obscur,"
        ]

        var citPart3 = [
            " ce Chevalier Jedi",
            " Boba Fett",
            " Dark Vador",
            " Dooku",
            " Dark Maul",
            " Dark Sidious",
            " Kylo Ren",
            " Palpatine",
            " Anakin Skywalker",
            " L’Empire"
        ]

        var citPart4 = [
            " dangereux il est !",
            " maladroit il est !",
            " triste il est !",
            " risquée son attitude est !",
            " beaucoup à gérer il a !",
            " loin il se perd !",
            " Heureux il vit !",
            " la guerre il gagnera !",
            " incertain l’avenir semble se dessiner !",
            " impossible à contrôler il est !"
        ]

        //demande du nombre de citations voulues
        var nbCitations = prompt("Entrez le nombre de citations voules entre 1 et 5");
        if (nbCitations >= 1 && nbCitations <= 5) {
            // boucle qui génère les citations.
            for (i = 1; i <= nbCitations; i++) {
                var extrait1 = citPart1[Math.floor(citPart1.length * Math.random())];
                var extrait2 = citPart2[Math.floor(citPart2.length * Math.random())];
                var extrait3 = citPart3[Math.floor(citPart3.length * Math.random())];
                var extrait4 = citPart4[Math.floor(citPart4.length * Math.random())];
                var citations = extrait1 + extrait2 + extrait3 + extrait4 + "\n";
                console.log(citations);
            }
        }
        // si nb choix n'est pas compris entre 1 et 5 on revient au debut de la fonction
        else {
            Yoda();
        }
    }

    //fonction pour les citations Kaamelott
    function Loth() {

        // extraits des citations
        var citKaam1 = [
            '« Ave Cesar, rosae rosam',
            '« Tempora mori',
            '« Victoriae mundis',
            '« Misa brevis',
            '« Mundi placet',
            '« Sanctis recorda',
            '« Fiat minimis',
            '« Odi panem',
            '« Nove sed',
            '« Retro peccat'
        ]
        var citKaam2 = [
            ' tempora mundis recorda ! »',
            ' et mundis lacrima ! »',
            ' et spiritus maxima ! »',
            ' et spiritus minima ! »',
            ' sanctis deus rex ! »',
            ' et patria. »',
            ' quid meliora ! »',
            ' timeo libri rex agitur ! »',
            ' et rex domini ! »'
        ]

        var citKaam3 = [
            ' Ah non, parce que là, j’en ai marre !',
            ' Eh bien ça, par exemple, ça veut absolument rien dire, mais l’effet reste le même',
            ' Ça veut rien dire, mais je suis très en colère contre moi même.',
            ' Bon, ça ne veut absolument rien dire, mais je trouve que c’est assez dans le ton.',
            ' on pourrait très bien imaginer une traduction du type : "Le roseau plie, mais ne cède... qu\'en cas de pépin" ce qui ne veut rien dire non plus.',
            ' Ça veut rien dire, mais je trouve que ça boucle bien.',
            ' Citation que j’ai jamais pu replacer correctement dans une conversation.',
            ' on peut vaguement en faire quelque chose.',
            ' Ça ne veut rien dire, mais c\'est ce que j\'ai trouvé de plus... aigre.',
            ' Vous entendez ça ? Il parait que je suis malpoli ! Qu\'est-ce que vous en pensez bande de trous-du-cul ?'
        ]

        //demande du nombre de citations voulues
        var nbCitations = prompt("Entrez le nombre de citations voulues entre 1 et 5");
        if (nbCitations >= 1 && nbCitations <= 5) {
            // boucle qui génère les citations.
            for (i = 1; i <= nbCitations; i++) {

                var extrait1 = citKaam1[Math.floor(citKaam1.length * Math.random())];
                var extrait2 = citKaam2[Math.floor(citKaam2.length * Math.random())];
                var extrait3 = citKaam3[Math.floor(citKaam3.length * Math.random())];

                var citations = extrait1 + extrait2 + extrait3 + "\n";
                console.log(citations);
            }
        }
        // si nb choix n'est pas compris entre 1 et 5 on revient au debut de la fonction
        else {
            Loth();
        }
    }

    // proposer de recommencer ou quitter.
    var reboot = prompt("Souhaitez vous d'autres citations?\nEntrez \nOUI pour recommencer\nNON pour quitter.");
    if (reboot === "OUI") {
        ProgCitations();
    } else if (reboot === "NON") {
        console.log("Et là, normalement, il me faut une citation latine, mais pfff... j’en ai marre ! CIAO");
    }

}
