/* 
Soal Code

sebuah angkot yang membawa banyak penumpang 
ada fitur:
1. tambah penumpang dan ada nama penumpang nya 
2. penumpang turun dan penumpang membayar 

supir nya nama nya : Asep,
rute: jakarta - tanggerang,
penumpang : 
kas : 0
*/


//Pengerjaan
function Panggil(supir,rute,penumpang,kas){
    this.supir = supir
    this.rute = rute
    this.penumpang = penumpang
    this.kas = kas

    //nambah penumpang 
    this.tambahPenumpang = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return penumpang;
    }

    //kurang penumpang
    this.kurangPenumpang = function(namaPenumpang,bayar){
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] == undefined
                this.kas = bayar
            }
        }
    }
}

let angkot1 = new Panggil("Asep",["Jakarta","Tanggerang"],[],0)