let jumlahAngkot = 10 
let noAngkot = 1
let angkotBeroprasi = 6

for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroprasi){
        console.log("Angkot no. " + noAngkot + " siap beroprasi")
    }
    else{
        console.log("Angkot no. " + noAngkot + " Rusak")
    }
}