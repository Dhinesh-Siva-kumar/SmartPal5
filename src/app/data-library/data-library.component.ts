import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data-library',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './data-library.component.html',
  styleUrl: './data-library.component.scss'
})
export class DataLibraryComponent {

}
