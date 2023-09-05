import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  songs: string[] = ['radha_ne_shyam_2.0', 'tere_hawale', 'qaafirana'];
  selectedSong: string | undefined;

  @Output() selectSongEvent = new EventEmitter<string>();

  selectSong(song: string) {
    this.selectedSong = song;
    this.selectSongEvent.emit(song);
  }
}
