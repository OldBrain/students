import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../service/student.";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public student = new Student(null, "", null);

  constructor(private studentService:StudentService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      if (param['id'] == "new") {
        this.student = new Student(null, "", null);
      }

      this.studentService.findById(param['id']).subscribe(student=>{
        this.student = student;
      },error => {
        console.log(error);
      })

    })


  }

  add(student: Student): void {
    this.studentService.add(student).subscribe(student=>{
      alert("Студент добавлен.");
    }, error => {
      atob(error);
    });
  }

  update(student: Student): void {
    this.studentService.update(student).subscribe(student=>{
      alert("Студент обновлен");
    }, error => {
      atob(error);
    });
  }

}
