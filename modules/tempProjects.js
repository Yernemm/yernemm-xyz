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
    'overwatch',
    '<i class="fas fa-globe"></i> Overwatch Hero Generator',
    'Web Tools',
    'ow',
    'This page will choose an Overwatch hero for you to play either randomly or based on chosen conditions.',
    imgOverwatch
)

addProj(
    'owleakgen',
    '<i class="fas fa-globe"></i> Overwatch Fake 4chan Leak Generator',
    'Web Tools',
    'ow',
    'This page will generate a fake 4chan-style leak for Overwatch content.',
    imgOverwatch
)

addProj(
    'patpatpat',
    '<i class="fas fa-globe"></i> Pat Pat Pat',
    'Web Tools',
    'ow',
    'Pat Pat Pat!',
    imgOverwatch
)

addProj(
    'wintermei',
    '<i class="fas fa-globe"></i> Mei\'s Winter Experience',
    'Web Tools',
    'ow',
    "Experience an accurate recreation of Mei's Winter Wonderland.",
    imgOverwatch
)

addProj(
    'owet',
    '<i class="fas fa-download"></i> OverWatch Extract Toolkit',
    'Standalone',
    'ow',
    'A set of tools for extracting files from Overwatch, including a DataTool GUI.',
    imgOverwatch
)

addProj(
    'memegen',
    '<i class="fas fa-globe"></i> Meme Name Generator',
    'Web Tools',
    'normal',
    'This will generate a name based on memes.',
    imgOther
)

addProj(
    'owmn-icons/',
    '<i class="fas fa-globe"></i> OWMN CSS Generator',
    'Web Tools',
    'ow',
    'Generate the CSS and spritesheet for OWMN subreddits.',
    imgOwmn
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