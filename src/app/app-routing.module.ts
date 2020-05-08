import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageThComponent } from './views/th/home-page-th/home-page-th.component';
import { HomePageEnComponent } from './views/en/home-page-en/home-page-en.component';
import { PrivacyComponent } from './views/en/privacy/privacy.component';
import { TermsOfUseComponent } from './views/en/terms-of-use/terms-of-use.component';
import { AboutUsComponent } from './views/en/about-us/about-us.component';
import { ProductsComponent } from './views/en/products/products.component';
import { DaicelGroupComponent } from './views/en/daicel-group/daicel-group.component';
import { CsrComponent } from './views/en/csr/csr.component';
import { NewsComponent } from './views/en/news/news.component';
import { ContactUsComponent } from './views/en/contact-us/contact-us.component';
import { AboutUsThComponent } from './views/th/about-us-th/about-us-th.component';
import { ProductsThComponent } from './views/th/products-th/products-th.component';
import { DaicelGroupThComponent } from './views/th/daicel-group-th/daicel-group-th.component';
import { CsrThComponent } from './views/th/csr-th/csr-th.component';
import { NewsThComponent } from './views/th/news-th/news-th.component';
import { ContactUsThComponent } from './views/th/contact-us-th/contact-us-th.component';
import { PreviewEnComponent } from './views/en/preview-en/preview-en.component';
import { PreviewThComponent } from './views/th/preview-th/preview-th.component';
import { YearThComponent } from './views/th/year-th/year-th.component';
import { YearComponent } from './views/en/year/year.component';
import { SearchThComponent } from './views/th/search-th/search-th.component';
import { SearchComponent } from './views/en/search/search.component';
import { PrivacyThComponent } from './views/th/privacy-th/privacy-th.component';
import { TermOfUseThComponent } from './views/th/term-of-use-th/term-of-use-th.component';
import { LoginComponent } from './admin/login/login.component';
import { PostComponent } from './admin/post/post.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';
import { PreviewAdminComponent } from './admin/preview-admin/preview-admin.component';
import { ChooseComponent } from './admin/choose/choose.component';
import { PreviewAdminThComponent } from './admin/preview-admin-th/preview-admin-th.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { MainComponent } from './admin/main/main.component';

const routes: Routes = [
    // { path : '',redirectTo: '/login',pathMatch:  'full'},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageEnComponent },
    { path: 'privacy-policy', component: PrivacyComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'daicel-group', component: DaicelGroupComponent },
    { path: 'csr', component: CsrComponent },
    { path: 'news-events', component: NewsComponent },
    { path: 'contact-us', component: ContactUsComponent },

    { path: 'preview', component: PreviewEnComponent },
    { path: 'th/preview', component: PreviewThComponent },
    { path: 'th/home', component: HomePageThComponent },
    { path: 'th/about-us', component: AboutUsThComponent },
    { path: 'th/products', component: ProductsThComponent },
    { path: 'th/daicel-group', component: DaicelGroupThComponent },
    { path: 'th/csr', component: CsrThComponent },
    { path: 'th/news-events', component: NewsThComponent },
    { path: 'th/contact-us', component: ContactUsThComponent },
    { path: 'th/year', component: YearThComponent },
    { path: 'year', component: YearComponent },
    { path: 'th/search', component: SearchThComponent },
    { path: 'search', component: SearchComponent },
    { path: 'th/privacy-policy', component: PrivacyThComponent },
    { path: 'th/terms-of-use', component: TermOfUseThComponent },

    { path: 'login', component: LoginComponent },
    {
        path: 'post', component: PostComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'post/create', component: PostCreateComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'post/edit/:id', component: PostEditComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'preview-save', component: PreviewAdminComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'th/preview-save', component: PreviewAdminThComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'choose', component: ChooseComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'main', component: MainComponent,
        // canActivate: [AuthGuard],
    },


    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
