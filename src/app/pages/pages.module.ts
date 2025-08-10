import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevopsComponent } from './devops.component';
import { JenkinsComponent } from './jenkins.component';
import { DockerComponent } from './docker.component';
import { AwsComponent } from './aws.component';
import { K8sComponent } from './k8s.component';
import { AnsibleComponent } from './ansible.component';
import { GitComponent } from './git.component';

@NgModule({
  declarations: [
    DevopsComponent,
    JenkinsComponent,
    DockerComponent,
    AwsComponent,
    K8sComponent,
    AnsibleComponent,
    GitComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
