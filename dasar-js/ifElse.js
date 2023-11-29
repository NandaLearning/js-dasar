let jumlahPesawat = 20
let noPesawat = 1
let pesawatBeroprasi = 12

for(noPesawat; noPesawat <= jumlahPesawat; noPesawat++){
    if(noPesawat <= pesawatBeroprasi && noPesawat !== 9){
        console.log("Pesawat No. " + noPesawat + "sedang beroprasi")
    }

    else if(noPesawat === 15 || noPesawat === 17 || noPesawat === 9){
        console.log("Pesawat No. " + noPesawat + "sedang lembur")
    }

    else{
        console.log("Pesawat No. " + noPesawat + "sedang tidak beroprasi")
    }

}