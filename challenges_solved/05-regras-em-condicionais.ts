const necessaryGradeToBeApproved = 7; // Nota necessaria para ser aprovado
const currentStudentGrade = 10; // Nota atual do aluno

const numberOfAbsensesToFailSchool = 100; // Maximo de numero de faltas
const currentStudentNumberOfAbsenses = 109; // Numero atual de faltas do aluno

function checkIfStudentPassedTheSchoolYear() {
  let error = false;
  let message = "Student was approved";

  if (currentStudentGrade < necessaryGradeToBeApproved) {
    error = true;
    message =
      "Student was not approved because his grade was below the necessary.";
  }

  if (currentStudentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
    error = true;
    message = "Student was not approved because of his absenses";
  }

  return { error, message };
}

console.log(checkIfStudentPassedTheSchoolYear());
