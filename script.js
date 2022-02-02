const result1 = document.getElementById('result1');
const next = document.getElementById('next');
next.addEventListener('click' , getimage)
function getimage() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=TPQQePInoddrNTILy0r8hQttiUDbmFK8DSF4pXiu')
    .then(res => res.json())
    .then(data => {
        result1.innerHTML= `<img src=${data.url}>`
        
    })
}
