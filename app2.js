
const url = 'j1.json';
let data = '';

const localData = localStorage.
getItem('temp');
console.log(localData);

myJson();
// console.log(person);



function myJson(){
    fetch(url)
    .then(rep => rep.text())
    .then(json => {
        data = JSON.parse(json);
        // console.log(data);
        let str = JSON.stringify.apply(data);
        localStorage.setItem('temp', str);
    })
}