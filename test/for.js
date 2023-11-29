//membuat segitiga
let kosong = ""

for(let i = 0; i <= 7; i++){
   kosong += "*"
   console.log(kosong)
}

let kosong2 = ""
for(let a = 7; a >= 0; a--){
    for(let b = 0; b < a; b++){
        kosong2 += "*"
    }
    kosong2 += "\n"
}
console.log(kosong2)
