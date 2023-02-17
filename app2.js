
const url = 'j1.json';
let data = '';

function myJson(){
    fetch(url)
    .then(rep => rep.text())
    .then(json => {
        data = JSON.parse(json);
        // console.log(data);
        let str = JSON.stringify(data);
        localStorage.setItem('temp1', str);
    })
}

const localData = localStorage.getItem('temp1');
console.log(localData);
if(!localData){
   myJson(); 
} else {
    console.log(localData);
}



// console.log(person);



