import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device, deviceHeader, DEVICES, deviceFilter } from '../../interface/interface';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceAddComponent} from '../../modal/device-add/device-add.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements AfterViewInit {

  allComplete: boolean = false;
  
  displayedColumns: string[] = deviceHeader;
  dataSource: MatTableDataSource<Device>;
  selection = new SelectionModel<Device>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = deviceFilter
  
  constructor(
    public dialog: MatDialog,

  ) {
    this.dataSource = new MatTableDataSource(DEVICES);
  }
  addDevice( Device? : Device ): void {
    const dialogRef = this.dialog.open(DeviceAddComponent, {
      width: '40%',
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }
  
  updateAllComplete() {
    this.allComplete = this.filter.subFilters != null && this.filter.subFilters.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.filter.subFilters == null) {
      return false;
    }
    return this.filter.subFilters.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.filter.subFilters == null) {
      return;
    }
    this.filter.subFilters.forEach(t => t.completed = completed);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    // 선택된 것과 데이터 row 개수가 같은지 확인 true false
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Device): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
   checkedNum(){
    var checkBoxes = document.querySelectorAll('td .mat-checkbox .mat-checkbox-input');
    var checkedBoxes = document.querySelectorAll('td .mat-checkbox .mat-checkbox-input:checked');
   }
}
