$(function(){

    var num1;

    document.getElementById('img_dado').style.display = 'none';
    document.getElementById('img_dado1').style.display = 'none';



    $("#jogador1").click(function(){

        document.getElementById('img_dado').style.display = 'block';

        $.ajax({
            type: "POST",
            url: "../model/model_jogoDados.php",
            data: "action=Lancamento1",
             
            success: function(msg){
                console.log(msg);
                num1 = msg

                var img =  document.querySelector("#img1");
                    
                    if (num1 == 1){

                        img.setAttribute('src', '../img_dado/1.jpg');

                    }
                    
                    if (num1 == 2){
                        img.setAttribute('src', '../img_dado/2.jpg');
                    }
                    if (num1 == 3){
                        img.setAttribute('src', '../img_dado/3.jpg');
                    }
                    if (num1 == 4){
                        img.setAttribute('src', '../img_dado/4.jpg');
                    }
                    if (num1 == 5){
                        img.setAttribute('src', '../img_dado/5.jpg');
                    }
                    if (num1 == 6){
                        img.setAttribute('src', '../img_dado/6.jpg');
                    }

                   
                
                
                    
                
            }


        });

    })

    $("#jogador2").click(function(){

        // console.log('numero do jogador 1  '+num1)
        document.getElementById('img_dado1').style.display = 'block';


        $.ajax({
            type: "POST",
            url: "../model/model_jogoDados.php",
            data: "action=Lancamento2" + "&num1=" + num1,
             
            success: function(msg){
                var msg = msg;
                var array = msg.split(" ");
                console.log(array);


                // $("#num2").text(array[0]);

                if (array[2] == 1) {
                    var vencedor = "O Jogador 1 venceu.";
                }
                if (array[2] == 2) {
                    var vencedor = "O Jogador 2 venceu.";
                }
                if (array[2] == 0){
                    var vencedor = "Empate.";
                }

                $("#resultado_jogo").text(vencedor);

                var img =  document.querySelector("#img2");
                    
                if (array[0] == 1){
                    img.setAttribute('src', '../img_dado/1.jpg');
                
                    $(this).css({"visibility": "hidden", });
                    
                    
                }
                if (array[0] == 2){
                    img.setAttribute('src', '../img_dado/2.jpg');

                }
                if (array[0] == 3){
                    img.setAttribute('src', '../img_dado/3.jpg');

                }
                if (array[0] == 4){
                    img.setAttribute('src', '../img_dado/4.jpg');

                }
                if (array[0] == 5){
                    img.setAttribute('src', '../img_dado/5.jpg');

                }
                if (array[0] == 6){
                    img.setAttribute('src', '../img_dado/6.jpg');

                }


            }

        }); 
    });

});