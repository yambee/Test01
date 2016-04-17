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
console.log (typeof st);
console.log (st.length);

// посчитать кол-во слов в абзаце (считаем кол0во пробелов и выдаём + 1)

for (i=0,j=0;i<st.length;i++){if (st[i]===" ") {j++}}
console.log(j+1);

// посчитать кол-во каждой из буквы, присутсвующих в строке

for (i=0, j={}; i<st.length; i++) {	
	if (j[st[i]]) {
		j[st[i]]++
	} else {
		j[st[i]] = 1
	}
};
console.log(j);
