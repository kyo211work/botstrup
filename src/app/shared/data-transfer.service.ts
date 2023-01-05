import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  
  private url: string = 'http://localhost:8080/hello-world';
  private endpointSelenium: string = 'http://localhost:8082/selenium';
  private endpointAppium: string = 'http://localhost:8083/appium';
  neep: string;
  neededAttribute: BehaviorSubject<any> = new BehaviorSubject<any>("");
  neededBackendAtt: BehaviorSubject<any> = new BehaviorSubject<any>("");
  
  constructor(private httpClient: HttpClient) { }
  
  //method A accesses
  set attributeBNeeds(value:string)
  {
    //this is the method that broadcasts to B (publish)
    this.neededAttribute.next(value);
  }

  //this is what B needs in order to subscribe
  getNeededAttributeObservable():Observable<any>
  {
    return this.neededAttribute.asObservable();
  }

  setNewValue(){
    return this.neep = this.neededAttribute.value;
  }

  makeBackendDataObsv():Observable<any>
  {
    return this.neededBackendAtt.asObservable();
  }

  testBackend(){
    return this.httpClient.get(this.url,{responseType: 'text'}).subscribe((data: any) =>{
      this.neededBackendAtt.next(data);
    });
  }

  runSelenium(){
    return this.httpClient.get(this.endpointSelenium,{responseType: 'text'}).subscribe((data: any) =>{
      this.neededBackendAtt.next(data);
    });
  }

  runAppium(){
    return this.httpClient.get(this.endpointAppium,{responseType: 'text'}).subscribe((data: any) =>{
      this.neededBackendAtt.next(data);
    });
  }
  
  giveData(){
    //return this.httpClient.post(this.url,console.log('hard coded').subscribe((data: any) =>);
    this.setNewValue();
    return this.httpClient.post(this.url,this.neep,{responseType:'text'}).subscribe((data: any) =>{
    this.testBackend()
   });
  }

 
}

