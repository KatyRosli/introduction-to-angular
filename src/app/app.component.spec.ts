import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HousingLocation } from './housing-location';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fairhouse'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fairhouse');
  });
  it('should display the Fairhouse logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header img').src).toContain('/assets/logo.svg');
  });
  it('should display a list of housing locations', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-housing-list')).toBeTruthy();
  });
  it('should update the selected location when a location is selected from the list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const selectedLocation: HousingLocation = { 
      name: 'Test Location', 
      city: 'Test City', 
      state: 'Test State', 
      availableUnits: 5, 
      laundry: true, 
      wifi: false,
      photo: 'test-photo.jpg'
    };
    app.updateSelectedLocation(selectedLocation);
    expect(app.selectedLocation).toEqual(selectedLocation);
  });
/*   it('should display the selected location information when a location is selected from the list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const selectedLocation: HousingLocation = { 
      name: 'Test Location', 
      city: 'Test City', 
      state: 'Test State', 
      availableUnits: 5, 
      laundry: true, 
      wifi: false,
      photo: 'test-photo.jpg'
    };
    app.updateSelectedLocation(selectedLocation);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    if (compiled.querySelector('article')) {
      expect(compiled.querySelector('article p:nth-child(1)').textContent).toContain('Test Location');
      expect(compiled.querySelector('article p:nth-child(2)').textContent).toContain('Test City, Test State');
      expect(compiled.querySelector('article p:nth-child(3)').textContent).toContain('Available Units: 5');
      expect(compiled.querySelector('article p:nth-child(4)').textContent).toContain('Has laudry');
      expect(compiled.querySelector('article p:nth-child(5)').textContent).toContain('Does Not have wifi');
      expect(compiled.querySelector('article img')?.getAttribute('src')).toContain('test-photo.jpg');
    } else {
    fail('Article element not found');
    }
  }); */
});
