import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: '', component: CourseListComponent
            },
            {
                path: 'info/:id', component: CourseInfoComponent
            }

        ])
    ]
})
export class CourseModule {

}