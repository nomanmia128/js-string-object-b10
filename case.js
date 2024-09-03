const school = 'RAJ UK Uttara Model School';
console.log(school);
// console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());

// uppercase: ABCD EFGH
// lowercase: abcd efgh
const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLocaleLowerCase === book.toLocaleLowerCase){
    console.log('I am reading book');
}
else{
    console.log('I don`t reading a book.')
}


const drink = ' water';
const liquid = ' water ';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else{
    console.log('somuder pani ase khaite pari na');
}