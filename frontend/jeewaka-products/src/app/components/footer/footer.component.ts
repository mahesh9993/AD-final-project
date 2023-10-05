import { Component } from '@angular/core';
import {faFacebook,faTwitter,faGoogle,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faHome,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faFacebook =faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faHome = faHome;
  faEnvelope =faEnvelope;
  faPhone = faPhone;
}
