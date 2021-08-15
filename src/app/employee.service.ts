import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return[
      {"id":1, "name":"bob","age":23},
      {"id":2, "name":"cat","age":28},
      {"id":3, "name":"rob","age":30},
      {"id":4, "name":"tori","age":39}

    ];
  }
}
