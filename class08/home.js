async function fetchStudents() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );

    const data = await response.json();
    return data; // само враќаме податоци
  } catch (error) {
    console.log("Fetch error:", error);
    return null; // или []
  }
}

// ЦЕЛАТА ЛОГИКА Е ТУКА (надвор од try/catch)
function processStudents(data) {
  if (!data) return; // ако fetch падне, да не крашне логиката

  console.log(data);

  let allStudentsAverageHigher3 = data.filter(x => x.averageGrade > 3);
  console.log(allStudentsAverageHigher3);

  let allFemaleNames = data
    .filter(x => x.gender === "Female")
    .filter(x => x.averageGrade === 5)
    .map(x => x.firstName);
  console.log(allFemaleNames);

  let allMaleNamesSkopje = data
    .filter(x => x.gender === "Male")
    .filter(x => x.city === "Skopje")
    .filter(x => x.age > 18)
    .map(x => `${x.firstName} ${x.lastName}`);
  console.log(allMaleNamesSkopje);

  let allFemale24 = data
    .filter(x => x.gender === "Female")
    .filter(x => x.age > 24)
    .map(x => x.averageGrade);

  let average = allFemale24.reduce((sum, grade) => sum + grade, 0) / allFemale24.length;
  console.log(average);

  let maleNameBAverage2 = data
    .filter(x => x.gender === "Male")
    .filter(x => x.firstName.slice(0, 1) === "B")
    .filter(x => x.averageGrade > 2)
    .map(x => x.firstName);
  console.log(maleNameBAverage2);

  // New requirements HOMEWORK
  let allStudents30plus = data
    .filter(x => x.age > 30)
    .map(x => `${x.firstName} ${x.lastName} ${x.age}`);
  console.log(allStudents30plus);

  let allStudentsCityB = data
    .filter(x => x.city.slice(0, 1) === "B")
    .map(x => `${x.firstName} ${x.lastName} ${x.city}`);
  console.log(allStudentsCityB);

  let allStudentsEmail = data
    .filter(x => x.email)
    .map(x => x.email);
  console.log(allStudentsEmail);

  let allStudentsAverage3 = data
    .filter(x => x.averageGrade === 3)
    .map(x => `${x.firstName} ${x.lastName}`);
  console.log(allStudentsAverage3);

  let counterMale = 0;
  let counterFemale = 0;

  data.forEach(x => {
    if (x.gender === "Male") counterMale++;
    if (x.gender === "Female") counterFemale++;
  });

  console.log(`Male students: ${counterMale}`);
  console.log(`Female students: ${counterFemale}`);
}

// Главен старт
async function main() {
  const students = await fetchStudents();
  processStudents(students);
}

main();