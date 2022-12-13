import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
// clickButton(arg0: string) {
// throw new Error('Method not implemented.');
// }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButton(gender:any)
  {
    console.log(gender)
    // this.router.navigate(['/', 'page-name'])
    this.router.navigate(['/'])
  }
}
