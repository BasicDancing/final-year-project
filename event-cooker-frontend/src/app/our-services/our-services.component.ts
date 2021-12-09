import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  title = 'ng-carousel-demo';
  
  images = [
    {title: 'Photography', link: "/user/photographer", short: 'Be a photogrpher, find your talent!', src: "../../assets/img/home/photography.jpg"},
    {title: 'Cinematography', link: "/user/cinematographer", short: 'Make a short film, live on your dream!', src: "../../assets/img/home/cinematography.jpg"},
    {title: 'Art of Voice', link: "/user/musician", short: 'Make a speech, show your talent!', src: "../../assets/img/home/voiceartist.jpg"},
    {title: 'Stay Beautiful', link: "/user/voice-artist", short: 'Outer beauty attracts, but inner beauty captivates!', src: "../../assets/img/home/staybeautiful.jpg"},
    {title: 'Catering Service', link: "/user/dancer", short: 'Catering to bad feelings feeds and empowers them!', src: "../../assets/img/home/cateringservice.jpg"},
    {title: 'Decoration', link: "/user/decorator", short: 'Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep!', src: "../../assets/img/home/decoration.png"},
    {title: 'DJ Music', link: "/user/parlour", short: 'Music is the wine that fills the cup of silence!', src: "../../assets/img/home/djmusic.jpg"},
    {title: 'Happiness of Dance', link: "/user/catering", short: 'There are shortcuts to happiness, and dancing is one of them!', src: "../../assets/img/home/happinessofdance.jpg"},
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
