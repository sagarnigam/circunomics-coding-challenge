import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { Speaker } from '../../models/speaker.model';
import { getSpeakersSelector } from '../../store/selectors/speaker.selector';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {

  speaker: Speaker;
  
  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        take(1),
        switchMap((params: any) => {
          return this.store.select(getSpeakersSelector).pipe(
            map((res) => {
              return res.filter((speaker) => speaker.login.uuid === params.id);
            })
          );
        })
      )
      .subscribe((data) => {
        this.speaker = data[0];
      });
  }
}
