import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteImageComponent } from './quote-image.component';

describe('QuoteImageComponent', () => {
  let component: QuoteImageComponent;
  let fixture: ComponentFixture<QuoteImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});