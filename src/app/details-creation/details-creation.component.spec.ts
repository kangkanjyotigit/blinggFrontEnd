import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCreationComponent } from './details-creation.component';

describe('DetailsCreationComponent', () => {
  let component: DetailsCreationComponent;
  let fixture: ComponentFixture<DetailsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
