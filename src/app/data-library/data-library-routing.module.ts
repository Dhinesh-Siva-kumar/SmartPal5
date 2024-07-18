import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './equipment structure/components/components.component';
import { ClassStructureComponent } from './equipment structure/class-structure/class-structure.component';
import { VesselDataLibraryComponent } from './equipment structure/vessel/vessel-data-library.component';
import { SpareMasterComponent } from './spare master/spare-master/spare-master.component';
import { JobMasterComponent } from './job master/job-master/job-master.component';
import { ArchiveJobComponent } from './job master/archive-job/archive-job.component';
import { JobLakeComponent } from './job master/job-lake/job-lake.component';

const routes: Routes = [
  {path:"", component: ComponentsComponent},
  {path:"class-structure", component: ClassStructureComponent},
  {path:"vessel", component: VesselDataLibraryComponent},
  {path:"spare-structure/spare-master", component: SpareMasterComponent},
  {path:"spare-structure/spare-lake", loadComponent: () => import('./spare master/spare-lake/spare-lake.component').then((x) => x.SpareLakeComponent)},
  {path:"spare-structure/archive-spare", loadComponent: () => import('./spare master/archive-spare/archive-spare.component').then((x) => x.ArchiveSpareComponent)},
  {path:"job-master", component: JobMasterComponent},
  {path:"job-lake", component: JobLakeComponent},
  {path:"archive-job", component: ArchiveJobComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLibraryRoutingModule { }
