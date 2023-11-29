//fungsi splice sangat fleksibel anda dapat menghapus,menambah dan mengganti element pada array
//dan nilai yang di hapus bisa di kembalikan

//splice menghapus element pada array

let buah = ["apel", "mangga", "pisang", "jeruk"];

// Menghapus 1 elemen mulai dari indeks 1
let elemenDihapus = buah.splice(1, 1);

console.log(buah);            // Output: ["apel", "pisang", "jeruk"]
console.log(elemenDihapus);   // Output: ["mangga"]




//menambah element pada array

let fruit = ["apel", "mangga", "pisang", "jeruk"];

//splice Menambahkan "anggur" dan "kiwi" mulai dari indeks 2, tanpa menghapus elemen
fruit.splice(2, 0, "anggur", "kiwi");

console.log(fruit);  // Output: ["apel", "mangga", "anggur", "kiwi", "pisang", "jeruk"]


//splice mengganti elment pada array

let array = ["apel", "mangga", "pisang", "jeruk"];

// Mengganti "mangga" dengan "anggur" pada indeks 1
array.splice(1, 1, "anggur");

console.log(array);  // Output: ["apel", "anggur", "pisang", "jeruk"]


