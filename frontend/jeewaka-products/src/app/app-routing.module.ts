import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/content/home/home.component";
import {ProductComponent} from "./components/content/product/product.component";
import {ProductAllComponent} from "./components/content/product/product-all/product-all.component";
import {ProductPowderComponent} from "./components/content/product/product-powder/product-powder.component";
import {ProductRawComponent} from "./components/content/product/product-raw/product-raw.component";
import {ProductMushroomComponent} from "./components/content/product/product-mushroom/product-mushroom.component";
import {ProductDehydrateComponent} from "./components/content/product/product-dehydrate/product-dehydrate.component";
import {GalleryComponent} from "./components/content/gallery/gallery.component";
import {ContactComponent} from "./components/content/contact/contact.component";
import {ReviewComponent} from "./components/content/review/review.component";
import {AboutComponent} from "./components/content/about/about.component";
import {LoginComponent} from "./components/content/login/login.component";
import {OrderComponent} from "./components/content/product/order/order.component";
import {OrderService} from "./services/product-services/order.service";
import {ProfileComponent} from "./components/content/profile/profile.component";
import {ProfileService} from "./services/user-services/profile.service";
import {EditProfileComponent} from "./components/content/edit-profile/edit-profile.component";
import {CartComponent} from "./components/content/cart/cart.component";
import {SearchComponent} from "./components/content/search/search.component";
import {GalleryService} from "./services/other-services/gallery.service";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {StatisticsComponent} from "./components/admin/statistics/statistics.component";
import {StatService} from "./services/admin-services/stat.service";
import {OrdersAdminComponent} from "./components/admin/orders-admin/orders-admin.component";
import {OrderAdminService} from "./services/admin-services/order-admin.service";
import {SalesAdminComponent} from "./components/admin/sales-admin/sales-admin.component";
import {SaleAdminService} from "./services/admin-services/sale-admin.service";
import {UsersAdminComponent} from "./components/admin/users-admin/users-admin.component";
import {UserAdminService} from "./services/admin-services/user-admin.service";
import {ProductsAdminComponent} from "./components/admin/products/products-admin/products-admin.component";
import {ProductAdminService} from "./services/admin-services/product-admin.service";
import {AddEditProductComponent} from "./components/admin/products/add-edit-product/add-edit-product.component";
import {AddEditProductService} from "./services/admin-services/add-edit-product.service";
import {GalleryAdminComponent} from "./components/admin/galleryControl/gallery-admin/gallery-admin.component";
import {GalleryControlService} from "./services/admin-services/gallery-control.service";
import {AddToGalleryComponent} from "./components/admin/galleryControl/add-to-gallery/add-to-gallery.component";
import {CustomerCareComponent} from "./components/admin/helpCenter/customer-care/customer-care.component";
import {CustomerCareService} from "./services/admin-services/customer-care.service";
import {CustomerCommentComponent} from "./components/admin/helpCenter/customer-comment/customer-comment.component";
import {AdminLoginComponent} from "./components/admin/admin-login/admin-login.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: "full"
  },

  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'product',
    redirectTo:'product-menu/all',
    pathMatch:"full"
  },
  {
    path:'product-menu',
    component:ProductComponent,
    children:[
      {
        path:'all',
        component:ProductAllComponent
      },
      {
        path:'powder',
        component:ProductPowderComponent
      },
      {
        path:'raw',
        component: ProductRawComponent
      },
      {
        path:'pmushroom',
        component:ProductMushroomComponent
      },
      {
        path:'dehydrate',
        component:ProductDehydrateComponent
      },
      {
        path:'order',
        component:OrderComponent,
        resolve:{
          data:OrderService
        }
      }
    ]
  },
  {
    path:'gallery',
    component:GalleryComponent,
    resolve:{
      data: GalleryService
    }
  },
  {
    path:'contact',
    component:ContactComponent
  },
  // {
  //   path:'review',
  //   component:ReviewComponent
  // },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent,
    resolve:{
      data: ProfileService
    }
  },
  {
    path:'edit-profile',
    component: EditProfileComponent,
    resolve:{
      data: ProfileService
    }
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },



  {
    path:'dashboard',
    redirectTo:'dashboard-menu/stat',
    pathMatch:"full"
  },
  {
    path: 'dashboard-menu',
    component: DashboardComponent,
    children:[
      {
        path:'stat',
        component: StatisticsComponent,
        resolve: {
          data:StatService
        }
      },
      {
        path: 'ad-orders',
        component: OrdersAdminComponent,
        resolve:{
          data: OrderAdminService
        }
      },
      {
        path:'ad-sales',
        component: SalesAdminComponent,
        resolve:{
          data: SaleAdminService
        }
      },
      {
        path:'ad-users',
        component: UsersAdminComponent,
        resolve:{
          data: UserAdminService
        }
      },
      {
        path:'ad-products',
        component: ProductsAdminComponent,
        resolve:{
          data: ProductAdminService
        }
      },
      {
        path:'addEditProduct',
        component: AddEditProductComponent,
        resolve:{
          data: AddEditProductService
        }
      },
      {
        path: 'ad-gallery',
        component: GalleryAdminComponent,
        resolve:{
          data: GalleryControlService
        }
      },
      {
        path:'addToGallery',
        component: AddToGalleryComponent
      },
      {
        path: 'ad-customerCare',
        component: CustomerCareComponent,
        resolve:{
          data: CustomerCareService
        }
      },
      {
        path:'customer-comment',
        component: CustomerCommentComponent,
        resolve:{
          data: CustomerCareService
        }
      }
    ]
  },
  {
    path:'admin',
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
