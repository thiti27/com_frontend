import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CookieService } from 'ngx-cookie-service';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md'
import { NavbarModule, WavesModule} from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderThComponent } from './views/th/header-th/header-th.component';

import { FooterComponent } from './views/en/footer/footer.component';
import { PrivacyComponent } from './views/en/privacy/privacy.component';
import { TermsOfUseComponent } from './views/en/terms-of-use/terms-of-use.component';
import { DaicelGroupComponent } from './views/en/daicel-group/daicel-group.component';
import { AboutUsComponent } from './views/en/about-us/about-us.component';
import { ProductsComponent } from './views/en/products/products.component';
import { CsrComponent } from './views/en/csr/csr.component';
import { NewsComponent } from './views/en/news/news.component';
import { ContactUsComponent } from './views/en/contact-us/contact-us.component';
import { AboutUsThComponent } from './views/th/about-us-th/about-us-th.component';
import { ProductsThComponent } from './views/th/products-th/products-th.component';
import { DaicelGroupThComponent } from './views/th/daicel-group-th/daicel-group-th.component';
import { CsrThComponent } from './views/th/csr-th/csr-th.component';
import { NewsThComponent } from './views/th/news-th/news-th.component';
import { ContactUsThComponent } from './views/th/contact-us-th/contact-us-th.component';
import { SlideFooterComponent } from './views/en/slide-footer/slide-footer.component';
import { FooterThComponent } from './views/th/footer-th/footer-th.component';
import { PreviewEnComponent } from './views/en/preview-en/preview-en.component';
import { PreviewThComponent } from './views/th/preview-th/preview-th.component';
import { YearComponent } from './views/en/year/year.component';
import { YearThComponent } from './views/th/year-th/year-th.component';
import { SearchComponent } from './views/en/search/search.component';
import { SearchThComponent } from './views/th/search-th/search-th.component';
import { HeaderEnComponent } from './views/en/header-en/header-en.component';
import { PrivacyThComponent } from './views/th/privacy-th/privacy-th.component';
import { TermOfUseThComponent } from './views/th/term-of-use-th/term-of-use-th.component';
import { ChooseComponent } from './admin/choose/choose.component';
import { LoginComponent } from './admin/login/login.component';
import { PostComponent } from './admin/post/post.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';
import { PreviewAdminComponent } from './admin/preview-admin/preview-admin.component';
import { PreviewAdminThComponent } from './admin/preview-admin-th/preview-admin-th.component';
import { RouterModule } from '@angular/router';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { HomePageThComponent } from './views/th/home-page-th/home-page-th.component';
import { HomePageEnComponent } from './views/en/home-page-en/home-page-en.component';
import { MainComponent } from './admin/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderThComponent,

    FooterComponent,
    PrivacyComponent,
    TermsOfUseComponent,
    DaicelGroupComponent,
    AboutUsComponent,
    ProductsComponent,
    CsrComponent,
    NewsComponent,
    ContactUsComponent,
    AboutUsThComponent,
    ProductsThComponent,
    DaicelGroupThComponent,
    CsrThComponent,
    NewsThComponent,
    ContactUsThComponent,
    SlideFooterComponent,
    FooterThComponent,
    PreviewEnComponent,
    PreviewThComponent,
    YearComponent,
    YearThComponent,
    SearchComponent,
    SearchThComponent,
    HeaderEnComponent,
    PrivacyThComponent,
    TermOfUseThComponent,
    ChooseComponent,
    LoginComponent,
    PostComponent,
    PostCreateComponent,
    PostEditComponent,
    PreviewAdminComponent,
    PreviewAdminThComponent,
    HeaderAdminComponent,
    HomePageThComponent,
    HomePageEnComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule, InputsModule,
    NavbarModule, WavesModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
