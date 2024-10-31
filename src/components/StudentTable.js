// src/components/StudentTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const StudentTable = ({ students, onEditStudent, onDeleteStudent }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>First Name</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Last Name</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>ID</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Age</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Gender</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Course</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Skills</TableCell>
                        <TableCell style={{fontWeight:'bold'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student, index) => (
                        <TableRow key={index}>
                            <TableCell>{student.firstName}</TableCell>
                            <TableCell>{student.lastName}</TableCell>
                            <TableCell>{student.id.split('-')[0]}</TableCell>
                            <TableCell>{student.age}</TableCell>
                            <TableCell>{student.gender}</TableCell>
                            <TableCell>{student.course}</TableCell>
                            <TableCell>{student.skills.join(', ')}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onEditStudent(student.id)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => onDeleteStudent(student.id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentTable;
