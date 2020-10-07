import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {
    heading : 'My Website',
    headertext : 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
    buttontext : 'Do some action',
    buttonlink : '/home'
  }
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.header = this.getHeader();
  }

  getHeader(){
    return this.config.getconfig().header;
  }

}
