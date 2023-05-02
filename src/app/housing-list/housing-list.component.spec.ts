import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingListComponent } from './housing-list.component';
import { HousingLocation } from '../housing-location';

describe('HousingListComponent', () => {
  let component: HousingListComponent;
  let fixture: ComponentFixture<HousingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a list of housing locations', () => {
    const locationList: HousingLocation[] = [ 
      { 
      name: 'Location 1',
      city: 'Chicago',
      state: 'IL',
      photo: 'http://example.com/location1.jpg',
      availableUnits: 10,
      wifi: true,
      laundry: false
    },
    {
      name: 'Location 2',
      city: 'New York',
      state: 'NY',
      photo: 'http://example.com/location2.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      name: 'Location 3',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'http://example.com/location3.jpg',
      availableUnits: 7,
      wifi: false,
      laundry: true
    }
  ];
  component.locationList = locationList;
  fixture.detectChanges();
  const locationElements = fixture.nativeElement.querySelectorAll('article');
  expect(locationElements.length).toBe(locationList.length);
  locationElements.forEach((element: { querySelector: (arg0: string) => any; }, index: number) => {
    const nameElement = element.querySelector('p:nth-of-type(1)');
    const cityStateElement = element.querySelector('p:nth-of-type(2)');
    const imageElement = element.querySelector('img');
    expect(nameElement.textContent).toContain(locationList[index].name);
    expect(cityStateElement.textContent).toContain(`${locationList[index].city}, ${locationList[index].state}`);
    expect(imageElement.getAttribute('src')).toBe(locationList[index].photo);
  });
  });
  it ('should filter the list of housing locations based on the search text', () => {
    const locationList: HousingLocation [] = [ 
      {
      name: 'Location 1',
      city: 'Chicago',
      state: 'IL',
      photo: 'http://example.com/location1.jpg',
      availableUnits: 10,
      wifi: true,
      laundry: true

    }, {
      name: 'Location 2',
      city: 'New York',
      state: 'NY',
      photo: 'http://example.com/location2.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    }, {
      name: 'Location 3',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'http://example.com/location3.jpg',
      availableUnits: 7,
      wifi: false,
      laundry: true
    }
  ];
  component.locationList = locationList;
  fixture.detectChanges();

  const searchInput = fixture.nativeElement.querySelector('input');
  searchInput.value = 'chicago';
  searchInput.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  const locationElements = fixture.nativeElement.querySelectorAll('article');
  expect(locationElements.length).toBe(1);

  const nameElement = locationElements[0].querySelector('p:nth-of-type(1)');
  const cityStateElement = locationElements[0].querySelector('p:nth-of-type(2)');
  const imageElement = locationElements[0].querySelector('img');

  expect(nameElement.textContent).toContain(locationList[0].name);
  expect(cityStateElement.textContent).toContain(`${locationList[0].city}, ${locationList[0].state}`);
  expect(imageElement.getAttribute('src')).toBe(locationList[0].photo);
  });
});