/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

var produtos = [
  {
    imagem: "assets/c1.webp",
    descricao:
      "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
    valor: "199,90",
  },
  {
    imagem: "assets/c2.webp",
    descricao:
      "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
    valor: "39,90",
  },
  {
    imagem: "assets/c3.webp",
    descricao:
      "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
    valor: "49,90",
  },
  {
    imagem: "assets/c4.webp",
    descricao:
      "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
    valor: "49,90",
  },
  {
    imagem: "assets/c5.webp",
    descricao:
      "Camiseta Juvenil Manga Curta Mario Bros Cinza",
    valor: "39,90",
  },
  {
    imagem: "assets/c6.webp",
    descricao:
      "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
    valor: "39,90",
  },
  {
    imagem: "assets/c7.webp",
    descricao:
      "Regata Infantil Mario Bros Branco Tam 4 a 10",
    valor: "29,90",
  },
  {
    imagem: "assets/c8.webp",
    descricao:
      "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
    valor: "49,90",
  },
  {
    imagem: "assets/c9.webp",
    descricao:
      "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
    valor: "39,90",
  },
  {
    imagem: "assets/c10.webp",
    descricao:
      "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
    valor: "149,90",
  },
  {
    imagem: "assets/c11.webp",
    descricao:
      "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
    valor: "49,90",
  },
  {
    imagem: "assets/c12.webp",
    descricao:
      "Camiseta Infantil Manga Curta Mário Bros Vermelha Tam 4 a 10",
    valor: "39,90",
  },
];

api.lista = function (req, res) {
  res.json(produtos);
};

module.exports = api;
