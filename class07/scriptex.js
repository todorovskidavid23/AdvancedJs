




fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
  
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    let avg3 = data.filter(x => x.averageGrade > 3);
    console.log(avg3);

    let femaleGrade5 = data
      .filter(x => x.gender === "Female")
      .filter(x => x.averageGrade === 5)
      .map(x=>x.firstName)
    console.log(femaleGrade5);

    let maleSkopje18plus = data
      .filter(x => x.gender === "Male" )
      .filter(x =>x.city === "Skopje") 
      .filter(x =>x.age > 18)
      .map(x => `${x.firstName} ${x.lastName}`);

    console.log(maleSkopje18plus);


    let femaleAverage24plus = data
      .filter(x => x.gender === "Female")
      .filter(x=>x.age>24)
      .map(x => x.averageGrade);
      
      console.log(femaleAverage24plus);

    let avgFemale24plus = femaleAverage24plus.reduce((sum, grade) => sum + grade, 0)/femaleAverage24plus.length
    console.log(avgFemale24plus); 

    let maleBGradeAbove2 = data
    .filter(x => x.gender === "Male")
    .filter(x=>x.firstName.slice(0,1) === "B")
    .filter(x=>x.averageGrade>2)
    console.log(maleBGradeAbove2);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

    





































