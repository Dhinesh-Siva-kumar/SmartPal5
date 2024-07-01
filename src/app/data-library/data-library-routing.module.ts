import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { EquipmentComponent } from './components/components-tabs/equipment/equipment.component';
import { ClassStructureComponent } from './class-structure/class-structure.component';

const routes: Routes = [
  {path:"", component: ComponentsComponent},
  {path:"component-equipment", component: EquipmentComponent},
  {path:"class-structure", component: ClassStructureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLibraryRoutingModule { }
