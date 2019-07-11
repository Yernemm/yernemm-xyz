const projectsDir = './site/projects/';
module.exports = {
    ps: projsString
}
let projsString = "";
let projects = [];

addProj(
    'owleakgen',
    'Overwatch Fake 4chan Leak Generator',
    'Web Tools',
    'overwatch',
    'This page will generate a fake 4chan-style leak for Overwatch content.'
)

genProjString()

function addProj(file, name, type, cat, desc){
    projects.push({
        file: file,
        name: name,
        cat: cat,
        type: type,
        desc: desc
    })
}

function genProjString(){
    let pjs = ""
projects.forEach(proj =>{
    pjs+= ``
})
}

function getProjs(){
    
}