import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = []

    private courses: Course[] =[]
    private filterBy: string = ''
    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.retrieveAll()
    }
    retrieveAll(): void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this.courses = courses
                this.filteredCourses = this.courses
            },
            error: err => console.log(err)
        })
    }
    deleteByID(course:number):void{
        this.courseService.deleteByID(course).subscribe({
            next:()=>{
                console.log('Delete with success')
                this.retrieveAll()
            },
            error:(err)=>{console.log(err)}
        })
    }
    set filter(value: string) {
        //console.log(value)
        this.filterBy = value
        this.filteredCourses = this.courses.filter((course: Course) => { return course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1 })
    }

    get filter() {
        return this.filterBy
    }
}