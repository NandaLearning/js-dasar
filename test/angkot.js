let penumpang = []

let tambahPenumpang = function(namaPenumpang,penumpang){
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang)
        console.log("penumpang baru di tambahkan")
        return tambahPenumpang;
    }

    for(let i = 0; i < penumpang.length; i++){
       if(penumpang[i] === undefined){
        penumpang[i] = namaPenumpang
        console.log("penumpang baru di tambahkan")
           return tambahPenumpang;
       }

       else if(penumpang[i] == namaPenumpang){
        console.log("penumpang sudah ada di mobil")
        return tambahPenumpang;
       }

       else if( i == penumpang.length - 1){
        penumpang.push(namaPenumpang)
        console.log("penumpang baru di tambahkan")
        return tambahPenumpang;
       }

    }      
}


let usirPenumpang = function(namaPenumpang,penumpang){
    if(penumpang == 0){
        console.log("penumpang masih kosong")
    }
    for(let i = 0; i < penumpang.length; i++){
        if(penumpang[i] == namaPenumpang){
            penumpang[i] = undefined
            console.log("penumpang di hapus")
        }
        else if(i == penumpang.length - 1){
            console.log(namaPenumpang + " tidak di temukan")
        }
    }

}