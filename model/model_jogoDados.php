<?php

include "../Dado.php";

extract($_POST);

switch ($action) {
    
        case 'Lancamento1':

        
            $jogo = new Dado();
            $rs = $jogo->lancarDados1();
            echo $rs;
            
        
        break;

        case 'Lancamento2':
        
            $jogo = new Dado();
            $rs = $jogo->lancarDados2($num1);
            echo $rs;
        
        break;

}

?>