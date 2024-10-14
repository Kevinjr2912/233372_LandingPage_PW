import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionInSocietyComponent } from './recognition-in-society.component';

describe('RecognitionInSocietyComponent', () => {
  let component: RecognitionInSocietyComponent;
  let fixture: ComponentFixture<RecognitionInSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecognitionInSocietyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognitionInSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
