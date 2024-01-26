const curiosidades = [
  {
    id: 1,
    titulo: "As borboletas têm cerca de 12 mil olhos.",
    imagem:
      "https://media.istockphoto.com/id/1283760778/pt/foto/monarch-delight.jpg?s=612x612&w=0&k=20&c=9CFX_aZ3AOAyAp6fHnhiiodmXn1qt1WZdota5e6ctq0=",
  },
  {
    id: 2,
    titulo:
      "Os vertebrados mais longevos do mundo são os tubarões da Groenlândia, que podem viver cerca de 400 anos.",
    imagem:
      " https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic515213.jpg?w=1600",
  },
  {
    id: 3,
    titulo:
      "Existem algumas árvores vivas espalhadas pelo mundo que têm, pelo menos, 5000 anos de idade.",
    imagem:
      "https://www.uninter.com/noticias/wp-content/uploads/2021/09/noticias_trees-3822149_1920-1024x682.jpg",
  },
  {
    id: 4,
    titulo: "Girafas não têm cordas vocais.",
    imagem: "https://static.biologianet.com/2019/06/cornos-em-girafas.jpg",
  },
  {
    id: 5,
    titulo:
      "A língua de uma baleia-azul pode pesar até 3,6 toneladas, o equivalente ao peso de um elefante médio.",
    imagem:
      "https://veja.abril.com.br/wp-content/uploads/2021/10/Salvador_DSC_3146_Sergio-Cipolotti.jpg.jpg?quality=70&strip=info",
  },
  {
    id: 6,
    titulo: "LeBron James é o primeiro jogador da NBA a marcar 39.000 pontos",
    imagem:
      "https://s2-ge.glbimg.com/1vlohlriWrSai70rIzAhZqYpWqA=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Y/m/2rlTu6SUSjBOD32bN76g/gettyimages-1831289314.jpg",
  },
  {
    id: 7,
    titulo:
      "Há uma lâmpada que permanece ligada continuamente há mais de 113 anos na cidade de Livermore, na Califórnia",
    imagem:
      "https://deolhonaengenharia.com/wp-content/uploads/2022/09/LampadaCentenaria1.jpeg",
  },
  {
    id: 8,
    titulo:
      "Os mosquitos são os animais mais letais do mundo, causando mais mortes humanas do que todas as guerras da história. Esses seres vivos matam cerca de 725 mil humanos anualmente.",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Aedes_aegypti.jpg/1200px-Aedes_aegypti.jpg",
  },
  {
    id: 9,
    titulo: "Todos os mamíferos são capazes de saltar, menos os elefantes.",
    imagem:
      "https://www.worldanimalprotection.org.br/cdn-cgi/image/fit=cover,width=800,format=auto/siteassets/article/3jkaicome_epp_26.jpg",
  },
];

const max = curiosidades.length;
const min = 0;

function curiosity() {
  const random = Math.floor(Math.random() * max);
  const button = window.document.querySelector(".title-bloco");
  const valorimagem = window.document.querySelector(".imagem");
  button.style.fontSize = "30px";
  button.innerHTML = curiosidades[random].titulo;
  valorimagem.src = curiosidades[random].imagem;
  valorimagem.style.display = "block";
}
