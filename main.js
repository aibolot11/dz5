function shortName(firstName, name, patronymic) {
    return `${firstName} ${name[0]}.${patronymic[0]}.`;
}

let result = shortName("Бекова", "Айдана", "Бековна");
console.log(result); 






function filterBooks(...books) {
    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    const otherBooks = books.filter(book => !booksWithU.includes(book));

    console.log('Книги с буквой "у":', booksWithU);
    console.log('Остальные книги:', otherBooks);
}

filterBooks("Маленький принц", "Вино из одуванчиков", "Код да Винчи", "1984", "Горе от ума");







let users = [
    { name: 'Aidana', birthDate: '2003-01-01' },
    { name: 'Aibolot', birthDate: '2005-05-10' },
    { name: 'Farida', birthDate: '2005-12-25' },
    { name: 'Asel', birthDate: '2000-03-15' },
    { name: 'Bakyt', birthDate: '2004-08-20' }
];

users.forEach(user => {
    console.log(`Пользователь ${user.name} родился в ${user.birthDate}`);
});




function isPalindrome(str) {
    const string = str.toLowerCase();

    let stringWithoutSpaces = '';
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== ' ') {
            stringWithoutSpaces += string[i];
        }
    }

    for(let i = 0; i < stringWithoutSpaces.length / 2; i++) {
        if(stringWithoutSpaces[i] !== stringWithoutSpaces[stringWithoutSpaces.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("505")); 
console.log(isPalindrome("lol")); 
console.log(isPalindrome("f")); 

