import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:"./course-info.component.html"
})
export class CourseInfoComponent implements OnInit{
    course!:Course
    constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService){}
    ngOnInit(): void {
        let currentRouteValue =  this.activatedRoute.snapshot.paramMap.get('id') as string
        let res = this.courseService.retrieveByID(Number(currentRouteValue))
        this.course = res
    }
    save():void{
        this.courseService.save(this.course)
    }

}
