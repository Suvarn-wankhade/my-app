import {Routes} from '@angular/router';
import { UserContainerComponent } from './components/user-container/user-container.component';


export class UserRouting {
    public static routes: Routes = [
        {
            path: '',
            component: UserContainerComponent
        }
    ];

}