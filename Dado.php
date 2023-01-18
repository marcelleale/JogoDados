<?php 

class Dado {
    

    function lancarDados1(){

        $num1 = rand(1,6);
        return $num1;

    }

    function lancarDados2($num1){

        $num2 = rand(1, 6);
        $result = "";
        
        if ($num1 == $num2){
            $result = 0;
        }
        if ($num1 > $num2){
            $result = 1;
        } 
        if ($num1 < $num2){
            $result = 2;
        }

        return $num2 . "  " .$result;

       

    }

    function compararNumeros(){

        list($num1) = $this->lancarDados1();
        list($num2) = $this->lancarDados2(); 

        $result = "";

        if ($num1 == $num2){
            $result = 0;
        }
        if ($num1 > $num2){
            $result = 1;
        } 
        if ($num1 < $num2){
            $result = 2;
        }

        echo ($result);
        return false;
    }
}

?>
