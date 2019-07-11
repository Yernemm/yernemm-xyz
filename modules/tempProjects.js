const projectsDir = './site/projects/';
module.exports = function () {
    return projsString;
}
var projsString = "";
let projects = [];

const imgOverwatch = "/static/media/icons/ow.svg"
const imgOther = "/static/media/icons/hammer.png"
const imgOwmn = "/static/media/icons/owmn.svg"

addProj(
    'owleakgen',
    'Overwatch Fake 4chan Leak Generator',
    'Web Tools',
    'ow',
    'This page will generate a fake 4chan-style leak for Overwatch content.',
    imgOverwatch
)

projsString = genProjString()

function addProj(file, name, type, cat, desc, img){
    projects.push({
        file: file,
        name: name,
        cat: cat,
        type: type,
        desc: desc,
        img: img
    })
}

function genProjString(){
    let pjs = ""
    pjs+= `<div>
    <ul class="w3-ul w3-card-2">`

projects.forEach(proj =>{

    pjs+= `<a href='/projects/${proj.file}'>
    <li class="w3-bar w3-border-top w3-border-bottom w3-border-blue">

        <div class="proj-cat-${proj.cat}">
            

        <img src="${proj.img}" class="w3-bar-item w3-circle" style="width:85px">
        <div class="w3-bar-item">
          <span class="w3-large">${proj.name}</span><br>
          <span>${proj.desc}</span>
        </div>
    </div>
      </li>
    </a>`

})

pjs+= `</ul> 
</div>`

return pjs;
}

function getProjs(){
    
}