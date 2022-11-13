const _name = document.getElementById('name');
const _path = document.getElementById('path');
const _url = document.querySelector('#url');
const addButton = document.getElementById('registration-form').lastElementChild;
const clearStudentsBtn = document.querySelector('#clear-students');
const tbody = document.querySelector('#Students');
const loading = document.querySelector('#loading');
const table = document.querySelector('.table');
const ui = new UI();
// const deleteStudent = document.getElementById('delete-student');

const showLoading = () => {
  loading.style.display = 'block';
};

const removeLoading = () => {
  setTimeout(() => {
    loading.style.display = 'none';
  }, 1000);
};

window.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', addNewStudent);
  clearStudentsBtn.addEventListener('click', clearAllStudents);
  document.addEventListener('click', (e) => {
    if ((e.target.id = 'delete-student')) {
      clickFunc;
    }
  });
});

const addNewStudent = (e) => {
  e.preventDefault();
  showLoading();
  const imageUrl = _url.value.trim();
  const studentName = _name.value.trim();
  const studentPath = _path.value.trim();
  if (imageUrl === '' || studentName === '' || studentPath === '') {
    confirm('Please enter students info!');
  } else {
    // const student = {};
    const studentObj = new Student(imageUrl, studentName, studentPath);
    //addStudentToUI func.
    ui.addStudentToUi(studentObj);
    //infoMessage
  }
  // let inputArray = document.querySelectorAll('.form-control');
  ui.clearInputs([_name, _path, _url]);
  removeLoading();
};

const clearAllStudents = () => {
  ui.clearStudents();
};

// deleteStudent.addEventListener('click', deleteStudent);

// const deleteStudents = () => {
//   ui.deleteSingleStudent();
// };

function clickFunc() {
  tbody.firstElementChild.remove();
}
