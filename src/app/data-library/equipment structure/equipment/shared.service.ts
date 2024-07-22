import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // private sidebarState = new BehaviorSubject<boolean>(false);
  // currentSidebarState = this.sidebarState.asObservable();

  constructor(private http:HttpClient) { }

  private selectedTreeIdSubject = new BehaviorSubject<any>(null);
  selectedTreeId$ = this.selectedTreeIdSubject.asObservable();

  set selectedTreeId(id: any) {
    this.selectedTreeIdSubject.next(id);
  }

  get selectedTreeId(): any {
    return this.selectedTreeIdSubject.value;
  }

  

  callGetApi(){
    const id = this.selectedTreeId;
      return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  // callPostApi(data: any) {
  //   return this.http.post<any>("https://dummy.restapiexample.com/api/v1/create", data);
  // }

  // callPutApi(data: any){
  //   return this.http.put<any>(`https://dummy.restapiexample.com/api/v1/update/${data.id}`, data)
  // }

  // callDeleteApi(data: any){
  //   return this.http.delete<any>(`https://dummy.restapiexample.com/api/v1/delete/${data.id}`)
  // }

}
