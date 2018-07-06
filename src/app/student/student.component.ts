import {Component, Input, OnInit} from '@angular/core';

import {Student} from '../list-student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  selectedStudent: Student;

  @Input() student: Student;

  constructor(
    private studentService: StudentService
  ) { }

  save(): void{
    this.studentService.update(this.student).then();
  }

  delete(student: Student): void {
    this.studentService
      .delete(hero.id)
      .then(() => {
        this.student = this.student.filter(h => h !== student);
        if(this.selectedStudent === hero){ this.selectedStudent = null; }
      });
  }

  getStudent(): void {
      this.studentService
      .getStudent()
      .then(heroes => this.student = student);
  }

  ngOnInit(): void {
    this.getStudent();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;

  }
}
