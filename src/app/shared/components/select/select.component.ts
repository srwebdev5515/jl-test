import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() width: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  @Input() options = ['option1', 'option2'];

  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClickValue(v: string) {
    this.value = v;
    this.valueChange.emit(v);
    this.opened = false;
  }

  onToggle(opended: boolean, event: Event) {
    event.stopPropagation();
    this.opened = opended;
  }

}
