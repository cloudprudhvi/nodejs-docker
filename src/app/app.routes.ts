
import { Routes } from '@angular/router';
import { DevopsComponent } from './pages/devops.component';
import { JenkinsComponent } from './pages/jenkins.component';
import { DockerComponent } from './pages/docker.component';
import { AwsComponent } from './pages/aws.component';
import { K8sComponent } from './pages/k8s.component';
import { AnsibleComponent } from './pages/ansible.component';
import { GitComponent } from './pages/git.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'devops', pathMatch: 'full' },
	{ path: 'devops', component: DevopsComponent },
	{ path: 'jenkins', component: JenkinsComponent },
	{ path: 'docker', component: DockerComponent },
	{ path: 'aws', component: AwsComponent },
	{ path: 'k8s', component: K8sComponent },
	{ path: 'ansible', component: AnsibleComponent },
	{ path: 'git', component: GitComponent },
];
