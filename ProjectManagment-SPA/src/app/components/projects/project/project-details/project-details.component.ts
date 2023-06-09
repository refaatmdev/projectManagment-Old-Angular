import { AfterContentInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridList } from '@angular/material/grid-list';
import { IProject } from 'src/app/_interfaces/project.interface';
import { BaseURL } from 'src/app/_services';
import { ProjectsService } from 'src/app/_services/projects.service';
import { ImageViewComponent } from '../../image-view/image-view.component';
import { QuotationActionComponent } from './quotation-action/quotation-action.component';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit,OnChanges  {
  @Input() project!: IProject;
  @ViewChild('grid') grid!: MatGridList;

  gridByBreakpoint:any = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }
  constructor(
    private dialog: MatDialog,
    private projectServices: ProjectsService,
    private observableMedia: MediaObserver
  ) {
    
  }

 

  ngOnInit(): void {}

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(QuotationActionComponent, {
      data: this.project,
      disableClose:true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (typeof result === 'undefined') return;
      if (result.event === 'Add') {
        this.projectServices
          .addProjectQuotation(result.data)
          .subscribe((result) => {
          });
      } else if (result.event === 'Update') {
        this.projectServices
          .updateQuotation(result.data)
          .subscribe((result) => {
          });
      } 
    });
  }

  openAgreement(obj: any) {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      data: obj,
      disableClose:true
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  ngOnChanges() {
    if (this.project.agreement === 'undefined' || null) {
      this.project.agreement =
        '/assets/images/default-placeholder-150x150.png';
    } else {
      this.project.agreement =
        BaseURL + '/' + this.project.agreement.replace('images/', '');

    }

    this.observableMedia.asObservable().subscribe((change: MediaChange[]) => {
      console.log(change[0].mqAlias)
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
    });
  }
}
