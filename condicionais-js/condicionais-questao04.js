const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [65, 70, 80]],
    ["Aluno4", [95, 85, 88]],
    ["Aluno5", [30, 40, 60]]
];

for (let aluno of alunos) {
    const nome = aluno[0];
    const notas = aluno[1];
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    
    const status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
}
