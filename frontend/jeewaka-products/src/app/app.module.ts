import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/content/home/home.component';
import { ProductComponent } from './components/content/product/product.component';
import { ProductAllComponent } from './components/content/product/product-all/product-all.component';
import { ProductPowderComponent } from './components/content/product/product-powder/product-powder.component';
import { ProductRawComponent } from './components/content/product/product-raw/product-raw.component';
import { ProductMushroomComponent } from './components/content/product/product-mushroom/product-mushroom.component';
import { ProductDehydrateComponent } from './components/content/product/product-dehydrate/product-dehydrate.component';
import { GalleryComponent } from './components/content/gallery/gallery.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ReviewComponent } from './components/content/review/review.component';
import { AboutComponent } from './components/content/about/about.component';
import { LoginComponent } from './components/content/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderComponent } from './components/content/product/order/order.component';
import { ProfileComponent } from './components/content/profile/profile.component';
import { EditProfileComponent } from './components/content/edit-profile/edit-profile.component';
import { CartComponent } from './components/content/cart/cart.component';
import { SearchComponent } from './components/content/search/search.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { StatisticsComponent } from './components/admin/statistics/statistics.component';
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';
import { SalesAdminComponent } from './components/admin/sales-admin/sales-admin.component';
import { UsersAdminComponent } from './components/admin/users-admin/users-admin.component';
import { ProductsAdminComponent } from './components/admin/products/products-admin/products-admin.component';
import { AddEditProductComponent } from './components/admin/products/add-edit-product/add-edit-product.component';
import { GalleryAdminComponent } from './components/admin/galleryControl/gallery-admin/gallery-admin.component';
import { AddToGalleryComponent } from './components/admin/galleryControl/add-to-gallery/add-to-gallery.component';
import { CustomerCareComponent } from './components/admin/helpCenter/customer-care/customer-care.component';
import { CustomerCommentComponent } from './components/admin/helpCenter/customer-comment/customer-comment.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductAllComponent,
    ProductPowderComponent,
    ProductRawComponent,
    ProductMushroomComponent,
    ProductDehydrateComponent,
    GalleryComponent,
    ContactComponent,
    ReviewComponent,
    AboutComponent,
    LoginComponent,
    OrderComponent,
    ProfileComponent,
    EditProfileComponent,
    CartComponent,
    SearchComponent,
    DashboardComponent,
    StatisticsComponent,
    OrdersAdminComponent,
    SalesAdminComponent,
    UsersAdminComponent,
    ProductsAdminComponent,
    AddEditProductComponent,
    GalleryAdminComponent,
    AddToGalleryComponent,
    CustomerCareComponent,
    CustomerCommentComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
