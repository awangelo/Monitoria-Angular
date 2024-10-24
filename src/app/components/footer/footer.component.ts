import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  leftUrl: string = 'https://github.com/awangelo/Monitoria-Angular';
  middleUrl: string = 'https://www.instagram.com/monitoriatech/';
}
