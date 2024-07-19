import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditService {
  private editedRowIndex: number | null = null;
  private formData: any = {};
  private isNew: boolean = false;

  private editedDataSubject = new BehaviorSubject<any>(null);
  public editedData$ = this.editedDataSubject.asObservable();

  public editRow(rowIndex: number, dataItem: any): void {
    this.editedRowIndex = rowIndex;
    this.formData = { ...dataItem };
    this.isNew = false;
    this.editedDataSubject.next(this.formData);
  }

  public addRow(): void {
    this.editedRowIndex = null;
    this.formData = {};
    this.isNew = true;
    this.editedDataSubject.next(this.formData);
  }

  public cancelEdit(): void {
    this.editedRowIndex = null;
    this.formData = {};
    this.isNew = false;
    this.editedDataSubject.next(null);
  }

  public save(data: any): void {
    this.editedRowIndex = null;
    this.formData = {};
    this.isNew = false;
    this.editedDataSubject.next(data);
  }

  public get editedRow(): number | null {
    return this.editedRowIndex;
  }

  public get isEditingNew(): boolean {
    return this.isNew;
  }
}
