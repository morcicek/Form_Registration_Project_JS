// class Student1 {
//   constructorStudent1(imageUrl, studentName, studentPath) {
//     console.log(this);
//   }
// }

function Student(imageUrl, studentName, studentPath) {
  // console.log(this);
  // console.log(self);
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
  // console.log(this);
}

const std = new Student('Url', 'Cevat', 'Frontend');
const std2 = new Student('Url', 'Muco', 'Security');
// console.log(std, std2);
