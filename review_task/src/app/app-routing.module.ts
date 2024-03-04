import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent/parent.component';
import { Child1Component } from './components/parent/child/child1/child1.component';

const routes: Routes = [
  {
    path: 'parent',
    component:ParentComponent,
    children: [
      {
        path: "child1",
        component: Child1Component
      }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
