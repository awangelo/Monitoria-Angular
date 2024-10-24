import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  productName = 'Caneca do Angular';
  productImage = 'assets/caneca-banner.png';
  productPrice = '45,00';
}
