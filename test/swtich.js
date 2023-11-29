//kantin 

alert("selamat datang di kantin kita!!")

let tanya = prompt("mau pesan makanan atau minuman?")
let kondisi = true

if(tanya === "makanan"){
   let iniMakanan = prompt("mau pilih yang mana? \n - Batagor \n - Cimol \n - Martabak" )

   switch(iniMakanan){
    case "batagor":
    case "cimol":
    case "martabak":
        alert("kamu memesan " + iniMakanan)
   }

   
}

else if(tanya === "minuman"){
    let iniMinuman = prompt("mau pilih yang mana? \n - Teajus \n - Milo \n - Jus" )
    
    switch(iniMinuman){
        case "teajus":
        case "milo":
        case "jus":
            alert("kamu memesan minuman " + iniMinuman)
            break;

            
        default:
        alert("minuman itu tidak tersedia");
    }

    
}

else{
    alert("trimakasih sudah berkunjung")
}

