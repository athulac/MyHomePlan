import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { WorksComponent } from './works/works.component';
import { LandsurveyComponent } from './landsurvey/landsurvey.component';
import { HouseplanComponent } from './houseplan/houseplan.component';
import { EstimationComponent } from './estimation/estimation.component';
import { ConstructionComponent } from './construction/construction.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { LandscapeComponent } from './landscape/landscape.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'team', component: TeamComponent },
    { path: 'works', component: WorksComponent },
    { path: 'services/land-surveying', component: LandsurveyComponent },
    { path: 'services/house-planing', component: HouseplanComponent },
    { path: 'services/estimation-and-material-listing', component: EstimationComponent },
    { path: 'services/construction', component: ConstructionComponent },
    { path: 'services/construction-consultancy', component: ConsultantComponent },
    { path: 'services/landscaping', component: LandscapeComponent },
];
