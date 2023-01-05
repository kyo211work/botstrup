import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTransferService } from "../shared/data-transfer.service";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']

})
export class ServerComponent implements OnInit {
    
    
    testString: string = 'hello';
    
    
    constructor(private dataTransferService: DataTransferService) {
    }

    ngOnInit() {

    }

    transferThis(data){
        this.dataTransferService.attributeBNeeds = data;
        console.log(data);
        this.dataTransferService.giveData();
    }

    callSelenium(){
        this.dataTransferService.runSelenium();
        console.log('Selenium called');
        this.testString = 'Selenium is running';
    }

    callAppium(){
        this.dataTransferService.runAppium();
        console.log('Appium called');
        this.testString = 'Appium is running';
    }


}
