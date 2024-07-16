import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './equipment structure/components/components.component';
import { ClassStructureComponent } from './equipment structure/class-structure/class-structure.component';
import { VesselDataLibraryComponent } from './equipment structure/vessel/vessel-data-library.component';

const routes: Routes = [
  {path:"", component: ComponentsComponent},
  {path:"class-structure", component: ClassStructureComponent},
  {path:"vessel", component: VesselDataLibraryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLibraryRoutingModule { }
