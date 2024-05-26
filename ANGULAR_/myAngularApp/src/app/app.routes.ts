import { Routes ,RouterModule} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:"sign-up",
        component:SignUpComponent
    },
{
    path:"shop",
    component:ShopComponent

},
{
    path:'student',
    component:StudentComponent
},
{
     path:'product',
     component:ProductComponent
},
{
    path:'account',
    component:AccountComponent
}
,
{
    path:'**',
    component:ShopComponent
}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
