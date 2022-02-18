import { Component, OnInit } from '@angular/core';
import {Student} from "../service/student.";
import {StudentService} from "../service/student.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})



export class StudentListComponent implements OnInit {

  public student = new Student(null, "", null);
  studentList: Student[] = [];
  constructor(private studentService:StudentService,
              private route:ActivatedRoute,
              private router:Router) { }


  ngOnInit(): void {
    this.studentService.findAll()
      .subscribe(studentList => {
        this.studentList = studentList;
      }, error => {
        console.log(error)
      });
  }

  pressButton(student: Student) {
    alert(student.id)
    this.studentService.remove(student.id).subscribe();
    this.ngOnInit();
  }
}
