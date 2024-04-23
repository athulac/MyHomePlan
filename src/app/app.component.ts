import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: '<p>Current URL: {{ currentUrl }}</p>',
})
// export class AppComponent {
//   title = 'MyHomePlan';
// }

export class AppComponent {
  public href: string = "";

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
      // this.href = this.router.url;   
      // console.log(this.router.url);
      this.href = this.location.path()
      console.log(this.location.path());
  }
}