import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-artist',
  templateUrl: './voice-artist.component.html',
  styleUrls: ['./voice-artist.component.scss']
})
export class VoiceArtistComponent implements OnInit {

  numbers = Array(10);
  title = "Voice Artist";

  constructor() { }

  ngOnInit(): void {
  }

}
