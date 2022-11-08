import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobListComponent } from './components/pages/job-list/job-list.component';
import { FavouriteJobComponent } from './components/pages/favourite-job/favourite-job.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';
import { PostAJobComponent } from './components/pages/post-a-job/post-a-job.component';
import { CandidateListComponent } from './components/pages/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './components/pages/candidate-details/candidate-details.component';
import { SingleResumeComponent } from './components/pages/single-resume/single-resume.component';
import { SubmitResumeComponent } from './components/pages/submit-resume/submit-resume.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CompanyListComponent } from './components/pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './components/pages/company-details/company-details.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SingleProfileComponent } from './components/pages/single-profile/single-profile.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import {EditprofileComponent} from './components/pages/editprofile/editprofile.component';
import {ForgotpasswordComponent} from './components/pages/forgotpassword/forgotpassword.component';
import {ResetpasswordComponent} from './components/pages/resetpassword/resetpassword.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'register', component: RegisterComponent },
    {path: 'about', component: AboutComponent},
    {path: 'job-list', component: JobListComponent},
    {path: 'favourite-job', component: FavouriteJobComponent},
    {path: 'job-details', component: JobDetailsComponent},
    {path: 'post-a-job', component: PostAJobComponent},
    {path: 'candidate-list', component: CandidateListComponent},
    {path: 'candidate-details', component: CandidateDetailsComponent},
    {path: 'single-resume', component: SingleResumeComponent},
    {path: 'submit-resume', component: SubmitResumeComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'company-list', component: CompanyListComponent},
    {path: 'company-details', component: CompanyDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotpasswordComponent},
    {path: 'reset-password', component: ResetpasswordComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'single-profile', component: SingleProfileComponent},
    {path: 'editprofile', component: EditprofileComponent},
    {path: '404', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
