


let name = prompt('Full Name ')
let roll = Number(prompt('Roll Number'))
let ban = Number(prompt('Bangla'))
let eng = Number(prompt('English'))
let math = Number(prompt('Math'))
let sic = Number(prompt('Science'))

let result = new ResultSystem();


console.log(`

    Student Name : ${name}
    Student Roll : ${roll}



    Subject          Marks    GPA         Grade
    Bangla          ${ban}          ${result.gpa(ban)}          ${result.grade(ban)}
    English         ${eng}          ${result.gpa(eng)}          ${result.grade(eng)}
    Math            ${math}         ${result.gpa(math)}         ${result.grade(math)}
    Science         ${sic}          ${result.gpa(sic)}          ${result.grade(sic)}
    ------------------------------------------------------------------------------------
                    ${result.cgpa(result.gpa(ban), result.gpa(eng), result.gpa(math), result.gpa(sic))}

`);  

