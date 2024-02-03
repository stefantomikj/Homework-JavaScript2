fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    //1.
    let studentsWithAverageGradeHiger3 = response.filter(
      (student) => student.averageGrade > 3
    );
    console.log(studentsWithAverageGradeHiger3);
    //2.
    let femaleNameAverageGrade5 = response
      .filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      )
      .map((student) => student.firstName);
    console.log(femaleNameAverageGrade5);
    //3.
    let maleStudentNamesOver18 = response
      .filter((student) => student.age > 18 && student.city === "Skopje")
      .map((student) => student.firstName);
    console.log(maleStudentNamesOver18);
    //4.
    let femaleStudentAverageGrade = response
      .filter((student) => student.gender === "Female" && student.age > 24)
      .map((student) => student.averageGrade);
    console.log(femaleStudentAverageGrade);
    //5.
    let maleStudentsNameStartB = response.filter(
      (student) =>
        student.averageGrade > 2 &&
        student.gender === "Male" &&
        student.firstName.includes("B")
    );
    console.log(maleStudentsNameStartB);
    //6.
    let allFemaleStudentsAcending = response
      .filter(
        (student) =>
          student.gender === "Female" && student.age >= 20 && student.age <= 30
      )
      .map((student) => student.email)
      .sort((a, b) => a.localeCompare(b, "en"));
    console.log(allFemaleStudentsAcending);

    //7.
    let studentsFullNamesAbove40Decending = response
      .filter((student) => student.age > 40)
      .map((student) => `${student.firstName} ${student.lastName}`)
      .sort((a, b) => b.localeCompare(a, "en"));
    console.log(studentsFullNamesAbove40Decending);
    //8.
    let countStudentUseGmail = response.filter((student) =>
      student.email.includes("google")
    );
    console.log(countStudentUseGmail);
    //9.
    let averageAgeFemaleStudentSkopje = response
      .filter(
        (student) => student.gender === "Female" && student.city === "Skopje"
      )
      .map((student) => student.age);
    console.log(averageAgeFemaleStudentSkopje);
    let filteredStudents =
      averageAgeFemaleStudentSkopje.reduce((acc, curr) => acc + curr, 0) /
      averageAgeFemaleStudentSkopje.length;
    console.log(filteredStudents);
  })
  .catch(function (error) {
    console.error(error);
  });
