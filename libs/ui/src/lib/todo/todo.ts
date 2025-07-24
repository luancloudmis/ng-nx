import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'lib-todo',
  imports: [Hero],
  standalone: true,
  template: `
    <lib-hero
      title="Welcmoe demo"
      subtitle="Todo app for nth time, another incomplete project"
      cta="Get Started"
    ></lib-hero>
  `,
  styles: ``,
})
export class Todo {}
