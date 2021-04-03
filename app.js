//alert('ini alert dari app.js')
//confirm('confirm dari app.js')
console.log('ini console.log dari app.js')

Date()

//variabel js
let a = 4221
let b = 2232
let c = a*b

console.log(c)

let tgl = Date()
// alert(tgl)

//DOM selector HTML
//document obj model
let nama = "Nando"
document.getElementById('Nando').innerHTML=nama

//DOM CSS
document.getElementById('Nando').style.color = 'red'
document.getElementById('Nando').style.backgroundColor = 'black'

document.getElementById('nim').style.color = 'blue'

function ubahWarna(){
    document.getElementById('nim').style.backgroundColor = 'red'
}
