let i = 0;
// предусловие
while (i < 3) {
    console.log(i);
    i++;
}
i = 6;
// постусловие
do {
    console.log(i);
    i++;
} while (i < 3);
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// бесконечный цикл
while (true) {
    // some code
}
do {
    // some code
} while (true);
for (; ;) {
    //some code
}
// пропуск итерации
for (let i = 0; ; i++) {
    if (i > 10) break; // прервать цикл
    if (i % 2 === 1) continue; // пропуск итерации (шага цикла)
    console.log(i);
}
// метки
outerLoop: for (let a = 0; a < 3; a++) {
    console.log('Upper cycle running');

    innerLoop: for (let b = 0; b < 3; b++) {
        console.log('Inner cycle running');
        if (b >= 1) break outerLoop;
    }
}
