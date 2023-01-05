import { Component, Input, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { DataTransferService } from '../shared/data-transfer.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
}) 
export class ServersComponent implements OnInit {

 
  testService: Observable<string>;

  backendObsString: Observable<string>;

  receivedData: string;

  constructor(private dataTransferService: DataTransferService) { }
  

  ngOnInit(): void {

    
    this.testService = this.dataTransferService.getNeededAttributeObservable();
    this.backendObsString = this.dataTransferService.makeBackendDataObsv();
    this.testService.subscribe(data=>{
      console.log(this.receivedData + 'here it is');
    });  
    
    console.log('when is this happening');
  }

  
}
