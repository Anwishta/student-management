import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

let nextStudentId = 1;

let students = [
  { id: nextStudentId++, name: 'Traci Price', email: 'nelsonsydney@hotmail.com', course: 'Science' },
  { id: nextStudentId++, name: 'Elijah Walker', email: 'sarahwalton@hotmail.com', course: 'History' },
  { id: nextStudentId++, name: 'John Knight', email: 'sarahopkins@sandoval-allen.com', course: 'Math' },
  { id: nextStudentId++, name: 'Donald Herman', email: 'srios@cochran.com', course: 'Science' },
  { id: nextStudentId++, name: 'Andrew Mason', email: 'delacruzcarrie@hotmail.com', course: 'Science' },
  { id: nextStudentId++, name: 'Scott Vargas', email: 'uhurst@yahoo.com', course: 'History' },
  { id: nextStudentId++, name: 'Amy Patterson', email: 'cherylpeters@hotmail.com', course: 'Computer Science' },
  { id: nextStudentId++, name: 'Veronica Cox', email: 'nicholevillegas@gmail.com', course: 'Computer Science' },
  { id: nextStudentId++, name: 'Deborah Parrish', email: 'mileskayla@delgado-richard.info', course: 'Computer Science' },
  { id: nextStudentId++, name: 'Kelly Garcia', email: 'bmcgee@gmail.com', course: 'English' },
  { id: nextStudentId++, name: 'Catherine Bailey', email: 'robertsmith@gmail.com', course: 'History' },
  { id: nextStudentId++, name: 'William Reynolds', email: 'sevans@henson.com', course: 'English' },
  { id: nextStudentId++, name: 'Mrs. Monica Silva', email: 'moransean@yahoo.com', course: 'Computer Science' },
  { id: nextStudentId++, name: 'Dan Clark', email: 'brownjoshua@gmail.com', course: 'History' },
  { id: nextStudentId++, name: 'Ann Howard', email: 'kevinmartinez@hotmail.com', course: 'Science' },
  { id: nextStudentId++, name: 'Stephanie Mendoza', email: 'danielweaver@yahoo.com', course: 'Computer Science' },
  { id: nextStudentId++, name: 'Tamara Reeves', email: 'christopher39@yahoo.com', course: 'English' },
  { id: nextStudentId++, name: 'Karen Reese', email: 'tamiortiz@gmail.com', course: 'Math' },
  { id: nextStudentId++, name: 'Morgan Stephens', email: 'mlowe@bailey-nelson.com', course: 'Science' },
  { id: nextStudentId++, name: 'Sabrina Bryant', email: 'gmann@warren-shaffer.biz', course: 'Science' }
];

mock.onGet('/students').reply(200, students);
mock.onPost('/students').reply((config) => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = nextStudentId++; 
  students.push(newStudent);
  return [200, newStudent];
});

export default axios;
