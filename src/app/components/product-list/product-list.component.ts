import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { Speaker } from 'src/app/models/speaker.model';

import { getSpeakers } from '../../store/actions/speaker.action';
import { getSpeakersSelector } from '../../store/selectors/speaker.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({
    filter: new FormControl(''),
  });

  displayedColumns: string[] = ['name', 'email', 'nat'];
  dataSource = new MatTableDataSource<Speaker>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private unsubscribeSubject = new Subject();

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getSpeakers());
    this.assignTableData();
  }

  ngAfterViewInit() {
    this.filterForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject),
        tap((res) => {
          this.dataSource.filter = res.filter.trim().toLowerCase();
        })
      )
      .subscribe();
  }

  assignTableData() {
    this.store
      .select(getSpeakersSelector)
      .pipe(
        takeUntil(this.unsubscribeSubject),
        tap((res) => {
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
        })
      )
      .subscribe();
  }

  navigateToDetails(row: any): void {
    this.router.navigate(['/product-details', row.login.uuid]);
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next('');
    this.unsubscribeSubject.complete();
  }
}
