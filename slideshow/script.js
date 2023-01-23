

const images = [
   {'id': '1', 'url': './img/homem.webp'},
   {'id': '2', 'url': './img/menina.jpeg'},
   {'id': '3', 'url': './img/menino.webp'},
   {'id': '4', 'url': './img/moça.jpeg'},
   {'id': '5', 'url': './img/moço.webp'},
   {'id': '6', 'url': './img/mulher.jpeg'},
   {'id': '7', 'url': './img/velha.jpeg'},
   {'id': '8', 'url': './img/velho.jpeg'},

]


const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
   images.forEach( image => {
      container.innerHTML +=
       `<div class='item'>
      <img src= '${image.url}'>
      </div>`
      
   });
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
   containerItems.appendChild(items[0]);//appenchild envia para o final da lista
   items = document.querySelectorAll('.item');//queryselectorall pega todos os elementos da lista
}


const next = () => {
  const lastItem = items[items.length - 1];//array.length -1 retoma o ultimo elemento
  containerItems.insertBefore(lastItem, items[0]);//insertBefore envia para o inicio da lista 
  items = document.querySelectorAll('.item')
} 

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next)
