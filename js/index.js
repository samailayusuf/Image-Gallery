//We declare an array containing our images
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',];

//We randomly select an image index for the default image in the gallery
const selectedDefaultImage = (Math.floor(Math.random() * images.length));

const defaultContent = `<img src= "img/pic${selectedDefaultImage}.jpg"/>`;

//console.log(defaultContent);

document.querySelector('.default-image').innerHTML = defaultContent;

const thumbnailsContainer = document.querySelector('.thumbnails');

let content = '';

images.map(image =>{
    //We use the map array method to visit every array element,
    //And add a boilerplate code containing an image to the content variable
    content += `<div class="img-container">
        <img src="img/${image}" alt="${image}" onclick="showModal(this)"/>
    </div> \n`
});

//console.log(content);
thumbnailsContainer.innerHTML = content;

//console.log(images);

function showModal(elem){
    //I selected the DOM element/image and set the src attribute to the one that was
    //captured on click 
    document.querySelector('.modal-image').setAttribute("src", elem.src);
    //I selected the modal container and remove the invisible class from
    //So that the modal containing the image will be displayed.
    document.querySelector('.modal').classList.remove("invisible");
    //console.log(elem.src);
}

function hideModal (e){
    document.querySelector('.modal').classList.add("invisible");
}