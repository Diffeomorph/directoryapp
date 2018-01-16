import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http, private router: Router) { }
  title: string = 'HELLO';
  apiValues: string[] = [];
  ngOnInit() {
    this._httpService.get('api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
  btnClick(): void {
    this.router.navigate(['/listing']);
  }
}
