import {Injectable} from '@angular/core';
import {Student} from './list-student';
import {Http, Headers} from '@angular/http';


@Injectable()

export class StudentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private studentUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentUrl)
      .toPromise()
      .then(response => response.json().data as Student[])
      .catch(this.handleError);
  }

  getStudent(id: number): Promise<Student> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Student)
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    const url = '${this.heroesUrl}/${student.id}';
    return this.http
      .put(url, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void>{
    const url = `${this.studentUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('an error', error);
    return Promise.reject(error.message || error);
  }
}
