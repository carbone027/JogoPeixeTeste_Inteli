//aqui são definidas as configurações básicas do jogo e armazenadas em uma variável config
var config = {
    //as propriedades da variável indicam as configurações

    //o tipo dela, aqui, será definido automaticamente pela biblioteca Phaser, o que faz o jogo ser
    //renderizado de acordo com o Phaser
    type: Phaser.AUTO,
    //largura e altura predefinidas pelo programador
    width: 800,
    height: 600,

    //a propriedade scene define algumas propriedas da cena do jogo (nesse caso, só tem 1)
    scene: {
        //preload são arquivos pré-carregados, ou seja, a página já iniciará com eles prontos
        preload: preload,
        //create são arquivos pré-carregados que são criados na página
        create: create,
        //update são informaçõs adicionadas posteriormente à página
        update: update,
    }
};

//essa variável cria um comando na biblioteca Phaser, o de criar um jogo novo seguindo as configurações
//da variável config
var game = new Phaser.Game(config);
//essa variável será usada mais tarde para ajudar na movimentação da imagem do peixinho laranja na tela
var peixinho;

//aqui são utilizadas as propriedades preload e create para adicionar o fundo da cena ao jogo
function preload(){
    this.load.image("bg", "assets/bg_azul-escuro.png");
    this.load.image("logo", "assets/logo-inteli_branco.png");
    this.load.image("peixinho", "assets/peixes/peixinho_laranja.png");
    this.load.image("concha", "assets/concha.png");
}
function create(){
    this.add.image(400, 300, "bg");
    //setScale define a escala da imagem a ser criada. aqui, no caso, ela será reduzida na metade
    this.add.image(400, 525, "logo").setScale(0.5);

    //conectando a variável peixinho a imagem do peixinho laranja
    peixinho = this.add.image(400, 300, "peixinho");
    //setOrigin define onde é o centro da imagem. sendo assim, se a imagem tem lado 1 (100%), a origem
    //se localizará em um ponto cujas coordenadas estão localizadas na metade de cada lado
    //setFlip indica se a imagem deve ser flipada na horizontal e/ou na vertical, respectivamente
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false);

    this.add.image(700, 525, "concha");
}
//como update é usado para coisas que vêm após a página ter sido carregada e criada com as devidas
//informações, será usado para que o peixe se movimente mesmo depois de a página ter sido criada
function update(){
    //atribuindo as posições nos eixos horizontal e vertical, respectivamente, aos inputs enviados pelo
    //cursor do usuário
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}