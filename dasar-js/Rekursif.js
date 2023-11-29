//rekursif adalah ketika sebuah function memanggil diri nya sendiri, gimana?
//contoh

function tes(a){

    console.log(a)
    if(a === 0) return;

    return tes(a - 1)
}

tes(20)