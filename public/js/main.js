let tableau = [];
for (let i = 0; i < 50; i++) {
    tableau.push(Math.floor(Math.random() * 100));
}
tableau.sort()

console.log(tableau)

let tableau3 = [];
for (let i = 0; i < 50; i++) {
    tableau3.push(Math.floor(Math.random() * 100));
}
tableau3.reverse()
console.log(tableau3)



///sans sort ///
let tableau2 = [];
for (let i = 0; i < 50; i++) {
    tableau2.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < tableau2.length; i++) {
    for (let j = i + 1; j < tableau2.length; j++) {
        if (tableau2[i] < tableau2[j]) {
            let temp = tableau2[i];
            tableau2[i] = tableau2[j];
            tableau2[j] = temp;
        }
    }
}

console.log(tableau2);
let notesEtudiants = [
    ["Étudiant 1", "Mathématiques", 80, "Histoire", 90],
    ["Étudiant 2", "Mathématiques", 70, "Histoire", 95],
    ["Étudiant 3", "Mathématiques", 60, "Histoire", 85]
];

let studen = (notesEtudiants[i][2] + notesEtudiants[i][4] / 2);
let student = [];
for (let i = 1; i < student.length; i++) {
    student.push((notesEtudiants[i][2] + notesEtudiants[i][4] / 2));
}


let averages = [];
for (let i = 0; i < students.length; i++) {
    let studentAverage = calculateStudentAverage(students[i]);
    averages.push(studentAverage);
}
console.log(studentsAverages)


    let transposedMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i]);
        }
        transposedMatrix.push(newRow);
    }


let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(transposedMatrix)