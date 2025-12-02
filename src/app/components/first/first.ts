import { Component } from '@angular/core';
import { MessageService } from '../../services/message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class FirstComponent {

  msg = ''
  
  constructor(private ms: MessageService) { }

  envoyer() {
    this.ms.sendMessage(this.msg)
    this.msg = ''
  }

}
