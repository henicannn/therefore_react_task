import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./CourseSubjectsTable.css";

function CourseSubjectsTable() {
  // Importing JSON data from file
  const courseSubjectsData = require("../../data/course-subjects.json");
  // Using React state to manage filter input value
  const [filter, setFilter] = useState(null);

  // Creating an array of alphabet letters to be used for the filter dropdown options
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  // Updating the filter value when the user clicks on a new button
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // Filtering the data based on the selected filter option
  const filteredData = filter
    ? courseSubjectsData.filter((courseSubject) =>
        courseSubject.subjectCode.startsWith(filter)
      )
    : courseSubjectsData;

  // Rendering the component
  return (
    <TableContainer component={Paper}>
      <div className="filter-buttons">
        {/* Adding buttons for each letter of the alphabet */}
        <label htmlFor="alphabetical-index">Filter by Alphabets:</label>
        <div className="button-group">
          <button
            className={`button ${!filter && "active"}`}
            onClick={() => handleFilterChange(null)}
          >
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              className={`button ${filter === letter && "active"}`}
              onClick={() => handleFilterChange(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      {/* Creating a table to display the data */}
      <Table
        className="course_subjects_table"
        aria-label="course subjects table"
      >
        {/* Adding a table header */}
        <TableHead>
          <TableRow>
            <TableCell className="table_titles">ID</TableCell>
            <TableCell className="table_titles">
              Subject Code
            </TableCell>
            <TableCell className="table_titles">
              Subject Title
            </TableCell>
            <TableCell className="table_titles">
              Academic Unit
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Adding a table body */}
        <TableBody>
          {/* Mapping the filtered data to generate the table rows */}
          {filteredData.map((courseSubject) => (
            <TableRow key={courseSubject.id}>
              <TableCell className="table_data" component="th" scope="row">
                {courseSubject.id}
              </TableCell>
              <TableCell className="table_data">{courseSubject.subjectCode}</TableCell>
              <TableCell className="table_data">{courseSubject.subjectTitle}</TableCell>
              <TableCell className="table_data">{courseSubject.academicUnit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseSubjectsTable;
