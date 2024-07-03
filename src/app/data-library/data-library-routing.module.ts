import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLibraryComponent } from './data-library.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentEquipmentComponent } from './components/components-tabs/component-equipment/component-equipment.component';
import { ClassStructureComponent } from './class-structure/class-structure.component';

const routes: Routes = [
  {path:"", component: ComponentsComponent},
  {path:"component-equipment", component: ComponentEquipmentComponent},
  {path:"class-structure", component: ClassStructureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLibraryRoutingModule { }
