// let angka = parseInt(prompt("masukan angka"))

// switch (angka) {
//     case 1:
//         alert("kamu memasukan angka 1")
//         break;

//     case 2 :
//         alert("kamu memasukan angka 2")
//     break;

//     default:
//         alert("kamu memasukan angka yang salah")
//         break;
// }



//cara terbaik 

let pilih = prompt("pilih makanan mu!" + "\n" + "mie,nasi gorang,esteh,jus")

switch (pilih){
    case "mie":
    case "esteh":
        alert("kamu memesan makanan tidak sehat")
        break;

    case "nasi goreng":
    case "jus":
        alert("Kamu memesan makanan sehat")
        break;

    default:
        alert("makanan tidak ada")
}