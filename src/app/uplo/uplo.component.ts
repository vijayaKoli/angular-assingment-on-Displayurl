import { Component } from '@angular/core';

@Component({
  selector: 'app-uplo',
  templateUrl: './uplo.component.html',
  styleUrls: ['./uplo.component.css']
})
export class UploComponent {
  displayedText: string | undefined;

  displayText(option: string): void {
    if (option === 'UPPER') {
      this.displayedText = 'MARVELLOUS INFOSYSTEMS';
    } else if (option === 'LOWER') {
      this.displayedText = 'marvellous Infosystems';
    }
  }
}


