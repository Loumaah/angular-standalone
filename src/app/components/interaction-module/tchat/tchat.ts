import { Component } from '@angular/core';
import { ParticipantComponent } from '../participant/participant';
import { MessageService } from '../../../services/message';
import { FormsModule } from '@angular/forms';
import { Participant } from '../../../models/participant';

@Component({
  selector: 'app-tchat',
  imports: [ParticipantComponent, FormsModule],
  templateUrl: './tchat.html',
  styleUrl: './tchat.css',
})
export class TchatComponent {

  participants: Participant[] = []
  nouveauParticipant: Participant = { username: '' }

  ajouterParticipant() {
    this.participants.push(this.nouveauParticipant);
    this.nouveauParticipant = { username: '' };
  }

}
