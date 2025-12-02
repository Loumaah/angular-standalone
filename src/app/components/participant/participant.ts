import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../services/message';
import { Subscription } from 'rxjs';
import { Participant } from '../../models/participant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-participant',
  imports: [FormsModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css',
})
export class ParticipantComponent implements OnInit, OnDestroy {

  participant = input.required<Participant>()
  msg = ''
  subscription!: Subscription
  messages: string[] = []
    
  constructor(private ms: MessageService) { }

  envoyer() {
    this.ms.sendMessage(this.msg)
    this.msg = ''
  }
  
    ngOnInit(): void {
      this.subscription = this.ms.getMessage().subscribe(text => this.messages.push(text))
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    } 

}
