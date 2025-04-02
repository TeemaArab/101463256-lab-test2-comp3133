import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Mission } from '../models/mission.model';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission ={} as Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spacexService.getMissionById(+id).subscribe(data => {
        this.mission = data;
      });
    }
  }
  goBack(): void {
    this.location.back();
  }
}

