import {Component, Input, OnInit} from '@angular/core';
import {Student, STUDENTS} from './list-student';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[StudentService]
})
export class AppComponent implements OnInit {

  students = STUDENTS;
  selectedStudent: Student;

  constructor(private studentService: StudentService){}


  ngOnInit(): void {
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
