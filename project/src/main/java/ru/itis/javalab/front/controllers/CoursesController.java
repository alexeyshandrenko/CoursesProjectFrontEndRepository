package ru.itis.javalab.front.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CoursesController {

    @GetMapping("/courses")
    public String getCoursesPage() {
        return "courses-teacher";
    }

    @GetMapping("/create_course")
    public String getCreateCoursePage() {
        return "create_course";
    }

    @GetMapping("/join_course")
    public String getJoinCoursePage() {
        return "join_course";
    }

    @GetMapping("/create_task")
    public String getCreateTaskPage() {
        return "create_task";
    }

    @GetMapping("/task")
    public String getTaskPage() {
        return "task";
    }

    @GetMapping("/create_subject")
    public String getCreateSubjectPage() {
        return "create_subject";
    }

}
