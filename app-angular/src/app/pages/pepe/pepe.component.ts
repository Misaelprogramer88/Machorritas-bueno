import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pepe',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pepe.component.html',  // ✅ sin ../
  styleUrls: ['./pepe.component.scss']   // ✅ sin ../
})
export class PepeComponent {}
