import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:"./course-info.component.html"
})
export class CourseInfoComponent implements OnInit{
    course!:Course
    httpClient: any;
    constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService){}
    ngOnInit(): void {
        let currentRouteValue =  this.activatedRoute.snapshot.paramMap.get('id') as string
        this.courseService.retrieveByID(Number(currentRouteValue)).subscribe({
            next:course=>this.course = course,
            error:err=>console.log(err)
        })
       
    }
    save():void{
        this.courseService.save(this.course).subscribe({
            next:course=>console.log('Saved with success ',course),
            error:err=>console.log(err)
        })
    }

    

}
