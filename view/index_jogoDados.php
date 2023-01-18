<DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Jogo dos Dados</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="text/javascript" src="../controller/jquery-3.6.3.min.js"> </script>
        <script type="text/javascript" language = "javascript" src="../controller/function.js"></script>
        </head>

    <body>

    <h2><i>Jogo dos Dados</i></h2>

    <button type="button" id="jogador1">JOGADOR 1</button>
    <button type="button" id="jogador2">JOGADOR 2</button>

    <br>

    <div id="num1" val=""></div>
    <div id="num2" val=""></div>
    <br><br>


    <span id="img_dado">

        <input type="image" id="img1" title="Jogador1" style="float:left" width="80" height="80">
    </span>

    <span id="img_dado1">
        <input type="image" id="img2"  style="float:left" width="80" height="80">
    </span>

    <br><br> <br><br> <br><br>
    
    <div>
        <div id="resultado_jogo"></div>   
    </div>

    </body>
</html>