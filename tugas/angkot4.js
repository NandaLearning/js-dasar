let jumlahAngkot = 10
let noAngkot = 1
var angkotBeroprasi = 6

for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroprasi && noAngkot !== 5 ){ //logika nya jika noAngkot kurang dari jumlah angkot yang beroprasi dan asal jangan noAngkot 5
        console.log("Angkot no. " + noAngkot + " siap beroprasi")
    }
    
    else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log("Angkot no. " + noAngkot + " lembur")
    }
    else{
        console.log("Angkot no. " + noAngkot + " rusak")
    }
}