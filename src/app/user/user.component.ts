import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  text: String = ''
  users!: UserComponent[];
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  
  constructor(private userService: UserService, private httpClient: HttpClient) { };

  ngOnInit(): void {
    
    console.log('I am here');
    this.httpClient.get('http://localhost:8080/hello-world',{responseType:'text'}).subscribe((data: any) =>
    {
      console.log(data);
      this.text = data;
    })
    
  }

}
