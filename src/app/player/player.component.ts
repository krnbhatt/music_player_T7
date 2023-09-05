import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() selectedSong: string | undefined;
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;

  playSong() {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;

    audio.src = `/assets/${this.selectedSong}.mp3`;

    console.log(audio.src);
    

    audio.play();
  }
}
