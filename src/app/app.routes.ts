import {Routes} from '@angular/router';
import {DefaultComponent} from "./shared/shared/layouts/default/default.component";
import {AuthentificationGuard} from "./shared/shared/authentification.guard";

export const routes: Routes = [
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: DefaultComponent},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'clients', canActivate: [AuthentificationGuard],
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'commandes', canActivate: [AuthentificationGuard],
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'paniers', canActivate: [AuthentificationGuard],
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'produits', canActivate: [AuthentificationGuard],
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  //   ]
  // },
]


