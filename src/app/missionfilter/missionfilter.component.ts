import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule]
})
export class MissionfilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<any>();

  years: number[] = [];
  selectedYear: string = '';
  launchSuccess: string = '';
  landSuccess: string = '';

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let y = 2006; y <= currentYear; y++) {
      this.years.push(y);
    }
  }

  onYearChange(event: any) {
    this.selectedYear = event.target.value;
    this.emitFilter();
  }

  onLaunchChange(event: any) {
    this.launchSuccess = event.target.value;
    this.emitFilter();
  }

  onLandChange(event: any) {
    this.landSuccess = event.target.value;
    this.emitFilter();
  }

  resetFilters() {
    this.selectedYear = '';
    this.launchSuccess = '';
    this.landSuccess = '';
    this.emitFilter();
  }

  emitFilter() {
    this.filterChanged.emit({
      year: this.selectedYear,
      launch: this.launchSuccess,
      land: this.landSuccess
    });
  }
}
