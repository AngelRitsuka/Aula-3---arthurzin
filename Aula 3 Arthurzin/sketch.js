//variavel - memoria - se lembrar

var arthur;
var angelica;
var bola;
var botao; //sprite - personagem
var botaoimg; //imagem


//função pre carregar coisas
function preload()
{
   // botaoimg=loadImage("botao.png");
    
}

//configurações
function setup()
{
    //criar a tela
    createCanvas(500,500);

    botao= createSprite(250,100);
    //propriedades
   // botao.addImage(botaoimg);
   // botao.scale = 0.13

    //x,y,largura,altura 
    /*menor para esquerda = x
    maior para direita = x
    maior para baixo = y
    menor para cima = y
    */

    bola = createSprite(250,250,50,50);
    angelica = createSprite(100,250,50,50);
    arthur = createSprite(400,250,50,50);
    
    
}

/*
posso
escrever
um
paragrafo kk
*/ 

//coisas dentro da tela
function draw()
{
    background("black");


    if(keyDown(UP_ARROW))
    {
        bola.y = bola.y -2
    }
   
    //todos aparecerem
    drawSprites();

   
}



function mexe()
{
    
    bola.velocityY=3;
    angelica.velocityX=5
    arthur.velocityX=-5
    
}
