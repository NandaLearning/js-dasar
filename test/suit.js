let kondisi = true
let kondisi2 = true

while(kondisi === true){
//user 
let player = prompt("pilih suit mu gunting,batu, atau kertas")
let hasil = ""


//komputer
let comp = Math.random()

if(comp < 0.32){
    comp = "gunting"
}
else if(comp > 0.34 && comp <= 0.67){
    comp = "batu"
}
else{
    comp = "kertas"
}


if(player === comp){
    hasil = "SERI"
}
else if (player == "kertas"){
    hasil = (comp == "batu") ? "MENANG" : "KALAH"
}  
else if (player == "gunting"){
    hasil = (comp == "kertas") ? "MENANG" : "KALAH"
}  
else if (player == "batu"){
    hasil = (comp == "gunting") ? "MENANG" : "KALAH"
}  
else{
   hasil = alert("gk ada bro")
}

if(player == "gunting" || player == "batu" || player == "kertas"){
    hasil = alert("Kamu : " + player + "\n" + "Komputer : " + comp + "\n" + "hasilnya kamu: " + hasil)
}
else{
    alert("masukan suit dengan benar")
}


kondisi = confirm("mau lagi?")
}
alert("trimakasih sudah mau memainkan game ini")