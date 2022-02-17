import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Student} from "./student.";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient ) { }

  public findAll() {
    return this.http.get<Student[]>("api/v1/student/");
  }

  public findById(id:string) {
    return this.http.get<Student>("api/v1/student/"+id);
  }
  public remove(id: number | null) {
    return this.http.delete("api/v1/student/del/"+id);
  }

  public add(student:Student) {
    return this.http.post<Student>("api/v1/student/",student);
  }

  public update(student:Student) {
    return this.http.put<Student>("api/v1/student/",student);
  }
}
