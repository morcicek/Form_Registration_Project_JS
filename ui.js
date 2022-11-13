function UI() {}

// console.log(UI.prototype);

UI.prototype.addStudentToUi = (newStudentObject) => {
  const tbody = document.getElementById('Students');
  tbody.innerHTML += `<tr>
  <td><img src="${newStudentObject.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
  <td>${newStudentObject.studentName}</td>
  <td>${newStudentObject.studentPath}</td>
  <td><a href="#" id="delete-student" class="btn btn-danger">Delete Student</a></td>
  </tr>`;
};

UI.prototype.clearInputs = (inputArray) => {
  inputArray.forEach((element) => {
    element.value = '';
  });
};

UI.prototype.clearStudents = () => {
  tbody.querySelectorAll('tr').forEach((element) => {
    element.remove();
  });
};

// UI.prototype.deleteSingleStudent = () => {
//   tbody.remove();
// };
