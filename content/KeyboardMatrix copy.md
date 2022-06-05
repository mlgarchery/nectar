Title: Keyboard Matrix
Date: 2022-05-30
Slug: keyboard-matrix
Summary: Quels système permet de réduire le nombre de PIN nécéssaires pour faire un clavier ?
Category: Mai22

<div id="left">
    <h1>Le circuit électrique des claviers</h1>
    <br>
    <p>
        Un clavier, c'est simple. Il s'agit simplement d'un ensemble d'interrupteurs: les touches.<br>
        Le problème c'est qu'il y en a beaucoup, généralement autour d'une centaine. Ce qui veut dire qu'on devrait avoir
        au moins un PIN par touche dans notre microcontrôleur (le petit processeur qui gère le circuit électrique du clavier).
        <br>
        Or, il n'y en a pas autant:
    </p>
    <center style="padding:10px;"><img src="images/keyboard/pin.jpg" width="375" center></center>
    <p>
        Sur l'image, il s'agit du microcontrôleur Elite C, avec 24 PIN utilisables, le reste étant réservé
        pour l'entrée et sortie du courant ainsi que la Terre.
    </p>
    <p>
        En bref, pour qu'on puisse faire un clavier avec moins de PIN,  l'idée a été de transmettre une partie de la complexité au microcontrôleur en construisant un circuit en matrice (Keyboard matrix).
    </p>
    <center>
        <img src="images/keyboard/MatriceKeyboard.svg" width="600">
        <h4> Avec columns+rows PINs on peut gérer colums*rows touches. </h4>
    </center>
    <p>
        Cela est fait de la façon suivante: le microcontrôleur parcourt à haute fréquence chaque colonne en y faisant passer un courant.
        Si une touche est pressée, un courant fera la jonction entre la colonne et la ligne, exemple D et 3. Au préalable, nous auront flashé la <a href="https://fr.wikipedia.org/wiki/M%C3%A9moire_morte">ROM</A> du microcontrôleur avec une configuration indiquant à quel caractère unicode D3 correspond. Le microcontrôleur sera alors en mesure d'envoyer ce caractère à l'ordinateur.
    </p>
    <center style="padding:15px"><img src="images/keyboard/cycles.gif" width="300"></center>
    <h3> Et voilà ! </h3>
    <p>
        Pour aller plus loin et comprendre comment ont été résolu les problèmes de ghosting induits par les matrices, vous pouvez vous référer à la section <b>6. Three Simultaneous Key Presses and Ghosting</b> de 
        <a href="https://www.dribin.org/dave/keyboard/one_html/">cet article</a>. Mais pour faire simple, il s'agit simplement d'ajouter une diode par touche !
    </p>
    <br>
    <p>
        Sources: <br>
        <a href="https://www.dribin.org/dave/keyboard/one_html/">cet article</a><br>
        <a href="https://www.pcbheaven.com/wikipages/How_Key_Matrices_Works/">pcbheaven</a>
    </p>
</div>
<div id="right" style="border-left: 1px solid black;">
    <p>
        Clavier mécanique soudé à la main avec circuit en matrice visible:
    </p>
    <img src="images/keyboard/flurplesBack.jpg" width="300">
    <img src="images/keyboard/flurplesFront.jpg" width="300">
    Les images ci-dessus proviennent du repo <a href="https://github.com/flurples/C-13X">github.com/flurples/C-13X</a>, open sourcé avec courtoisie.
</div>