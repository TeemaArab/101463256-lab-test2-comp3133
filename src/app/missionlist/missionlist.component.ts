import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [CommonModule, MissionfilterComponent]
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.getLaunches(); // Load all at first
  }

  getLaunches(filters: any = {}): void {
    this.spacexService.getFilteredLaunches(filters).subscribe(data => {
      this.launches = data;
    });
  }

  onFilterChanged(filterData: any): void {
    this.getLaunches(filterData); // Apply filters
  }
}
