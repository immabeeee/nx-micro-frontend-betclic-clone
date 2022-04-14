import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-micro-frontends-betclic-clone-workspace-betclic-button',
  templateUrl: './betclic-button.component.html',
  styleUrls: ['./betclic-button.component.scss']
})
export class BetclicButtonComponent implements OnInit {
  @Input() name!: string;
  @Input() isActive!: boolean;
  @Input() isPrimary: boolean = false;
  @Input() isSecondary: boolean = false;
  @Input() isTertiary: boolean = false;
  @Input() isQuaternary: boolean = false;
  @Input() isLarge: boolean = false;
  @Input() isMedium: boolean = false;
  @Input() isSmall: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}