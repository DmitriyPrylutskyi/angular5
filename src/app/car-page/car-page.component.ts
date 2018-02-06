import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;
  year: number;
  color: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.year = +this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.id = params['id'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    });

    this.route.fragment.subscribe((fragment) => {
      this.hash = fragment;
    });
  }

  openLink() {
    this.router.navigate(['/cars', 5, 'Mazda'], {
      queryParams: {
        color: 'yellow',
        year: 2000
      },
      fragment: 'pics'
    });
  }
}
