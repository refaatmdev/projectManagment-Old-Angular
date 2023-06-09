import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from 'src/app/_interfaces/emplyee.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-employee-actions',
  templateUrl: './employee-actions.component.html',
  styleUrls: ['./employee-actions.component.scss'],
})
export class EmployeeActionsComponent implements OnInit {
  action: string;
  local_data: any;
  imagePath: any;
  form: any;
  fileError: string = '';
  public currentDate?: string;
  constructor(
    private formBuilder: FormBuilder,
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<EmployeeActionsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IEmployee
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.currentDate = moment().startOf('month').format('YYYY-MM-DD'); 
  }

  ngOnInit(): void {
    this.initForm();
    if (this.local_data.action === 'Update') {
      this.filForm();
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', {
        validators: [Validators.required],
      }),
      phone: new FormControl('', { validators: [Validators.required] }),
      bankAccount: new FormControl('', { validators: [Validators.required] }),
      bankBranch: new FormControl('', { validators: [Validators.required] }),
      createdAt: new FormControl('', { validators: [Validators.required] }),
    });
  }

  filForm() {
    this.form.setValue({
      firstName: this.local_data['firstName'],
      lastName: this.local_data['lastName'],
      phone: this.local_data['phone'],
      bankAccount: this.local_data['bankAccount'],
      bankBranch: this.local_data['bankBranch'],
      createdAt: moment(this.local_data['createdAt']).format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  doAction() {
    const project: IEmployee = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      phone: this.form.value.phone,
      dailyWage: this.form.value.dailyWage,
      bankAccount: this.form.value.bankAccount,
      bankBranch: this.form.value.bankBranch,
      createdAt: this.form.value.createdAt,
    };

    if (this.form.invalids) return;
    this.dialogRef.close({ event: this.action, data: project });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
