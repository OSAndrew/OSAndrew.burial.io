let displayImage = document.querySelector('img')

displayImage.onclick = function() {
    let displayImageSrc = displayImage.getAttribute('src');
    if(displayImageSrc === 'images/burial.jpg')
        displayImage.setAttribute('src', 'images/burial-face.jpg')
    else
        displayImage.setAttribute('src', 'images/burial.jpg')
}

let supriseButton = document.querySelector('button')
let myHeader = document.querySelector('h1')

function changeHeader() {
    myHeader.textContent = 'UNTRUE!'
}

supriseButton.onclick = function() {
    changeHeader()
}