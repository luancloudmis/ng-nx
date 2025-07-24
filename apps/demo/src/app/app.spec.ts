import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])], // Cần cung cấp router để tránh lỗi khi test router-outlet
    }).compileComponents();
  });

  it('should render router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Test nếu router-outlet tồn tại
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
