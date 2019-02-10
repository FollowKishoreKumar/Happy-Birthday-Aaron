import { Component, TemplateRef, ViewEncapsulation, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Messages } from './messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'app';
  modalRef: BsModalRef;
  messages: Messages[];
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.messages = [
    {
      "name": "Evan",
      "message": "Godbless you! come to mangalore with Achu"
    },
    {
      "name": "Danny",
      "message": "Hi Aaron , happy 28th bday da , have a blessed year ahead , god bless u 😇😇😇 found this old pic of u n me , I'm happy that  my pants are on when this pic was taken 😅 in childhood days coming to alandur was so much fun , seeing all cousins , I do miss that , we shld meet up more often ,,, have a blessed year ahead Aron 😁😁😁"
    },
    {
      "name": "Indu & Ajay",
      "message": "Stay eeeeeeeeeeeeing always.Have wonderful Birthday Aaron. "
    },
    {
      "name": "Aishu",
      "message": "Happy birthday, bro.. Kalyanam aagiduchu, inimae mudi kottina kooda kavala ille.. Mmm.. Enjoy 😜"
    },
    {
      "name": "Bala",
      "message": "Happiiieee bday da naye🎊🎉👊🏼🤛🏼🤜🏼 .. hope 7.5 Sani is doing good with you🥳 .. have a great year ahead with 7.5 coming along.. hope things will not the that worse 😜🤭 .. nalla iru da nallavane.. have fun and live a beautiful year and many more to come in your life with your wife 😊🤗"
    }
    ]
  }




  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  callFacebook() {
    window.open('https://www.facebook.com/kishoreclickr');
  }
  callInstagram() {
    window.open('https://www.instagram.com/kishore_clickr');
  }
  callTwitter() {
    window.open('https://twitter.com/kishoreclickr');
  }
  callLinkedIN() {
    window.open('https://www.linkedin.com/in/kishore-kumar-s-277243b7');
  }
  callGmail() {
    window.open('mailTo(followkishorekumar@gmail.com)')
  }



}
