a = [];  //пустой массивчик

for (i=0; i<5; i++) {
	var b = {
				name: 'susan',
				gender: 'fem '+i
			};
	b[i] = i;
	a.push(b);
}

console.log(a);


// вывести календарь
// список

// посчитать кол-во букв в слове

st = prompt ("Введите слово");

console.log (st);
// console.log (typeof st);
console.log ("Длина строки " + st.length);

// посчитать кол-во слов в абзаце (считаем кол0во пробелов и выдаём + 1)

for (i=0,j=0;i<st.length;i++){if (st[i]===" ") {j++}}

console.log("Кол-во слов " + (j+1));

// посчитать кол-во каждой из буквы, присутсвующих в строке
// идея в том чтобы создать пустой объект (он же ассоц массив), у которого на лету будет создаваться одноименное св-во (название св-ва = текущая буква строки в цикле), значением этого св-ва будет кол-во встреч этой буквы в строке. Например на выходе будет 
// следствием такого подхода станет то что в объект будут добавлены только те буквы-свойства, которые встретились в строке хотя бы раз, и не будет других букв вообще
// j["ы"]=3, j["м"]=2, j["ц"]=3, j[" "]=3 (то есть даже пробел и тот может стать названием отдельного свойства объекта!)

for (i=0, j={}; i<st.length; i++) {
	l = j[st[i]]; // кэшируем в короткую переменную созданное на лету св-во объекта
	if (l) {l++} else {l=1}; // в случае новой буквы св-во объекта j, соотв-щее этой букве, примет значение undefined (как только что созданное), что породит в дальнейших операциях с ним ошибку NaN. По-этому если оно = undefined то сразу приравниваем к единице, т.о фиксируем первое вхождение данной буквы в строке 
	j[st[i]] = l
};

console.log(j);



// попробуем теперь на этой логике построить частотный словарь слов
// логично в кач-ве счетчика для каждого слова использовать одноименное св-во объекта, как и с буквами

var w = ""; // если не инициализировать ругается что undefined при сложении w += st[i]
for (i=0, j={}; i<st.length; i++) {  // переходим к след символу в строке st
	if (st[i] === " ") { // если попался пробел
		if (j[w]) {j[w]++} else {j[w]=1}; // слово w становится именем св-ва объекта j, а значение св-ва увеличивается на 1 или, в случае undefined, приравнивается к 1 (значит слово новое)
		w = "" // после пробела слово надо обнулить, тк начнется новое
	} else {
		w += st[i] // если текущиий симв - не пробел, то добавляем его к строке w
	}
}
console.log(j);

// console.log(keys(j)); работает только в консоли хрома

// сортировка 

