import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  searchHousingLocations(searchText: string) {
    console.log(searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
