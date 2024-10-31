import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

import { Typography } from "@mui/material";

function App() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editStudentData, setEditStudentData] = useState(null);

  const handleAddStudent = (newStudent) => {
    if (editId !== null) {
      const updatedStudents = students.map((student) =>
        student.id === editId ? newStudent : student
      );
      setStudents(updatedStudents);
      setEditId(null);
      setEditStudentData(null); 
    } else {
      setStudents([...students, newStudent]);
    }
  };

  const handleEditStudent = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setEditId(id);
    setEditStudentData(studentToEdit);
  };

  const handleDeleteStudent = (id) => {
    console.log(students, id);
    setStudents(students.filter((_, i) => students[i]?.id !== id));
  };

  return (
    <div className="App">
      <Typography variant="h4" component="h1" gutterBottom>
        Student Management System
      </Typography>
      <StudentForm
        onAddStudent={handleAddStudent}
        studentData={editStudentData}
      />
      <StudentTable
        students={students}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
}

export default App;
