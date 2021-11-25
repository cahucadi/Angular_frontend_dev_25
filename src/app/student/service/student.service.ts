import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IStudent } from "../student.interface";
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL:string = environment.apiURL;

  constructor(private readonly httpCLient:HttpClient) { }

  getStudents(): Observable<IStudent[]>{
    return this.httpCLient.get<IStudent[]>(`${this.API_URL}/student`);
    //.pipe(map((data:any) => data.result )); // get json response attribute
  }

  getStudentById(studentId:string): Observable<IStudent>{
    return this.httpCLient.get<IStudent>(`${this.API_URL}/student/${studentId}`);
  }

  createStudent(student: IStudent ): Observable<IStudent>{
    return this.httpCLient.post<IStudent>(`${this.API_URL}/student/create`, student);
  }

  updateStudent(studentId:number, student: IStudent ): Observable<IStudent>{
    return this.httpCLient.put<IStudent>(`${this.API_URL}/student/update/${studentId}`, student);
  }

  deleteStudent(studentId:number): Observable<IStudent>{
    return this.httpCLient.delete<IStudent>(`${this.API_URL}/student/delete?studentId=${studentId}`);
  }

}


