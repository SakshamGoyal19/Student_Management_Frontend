package com.sagar.student_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sagar.student_management_system.bean.Course;
import com.sagar.student_management_system.service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
public class CourseController {
	
	@Autowired
	private CourseService service;
	
	@GetMapping()
	public List<Course> getCourses(){
		
		return service.getCourses();
	}
	
	@GetMapping("/{id}")
	public Course getStudent(@PathVariable String id) {
		
		return service.getCourse(id);
	}
	
	@PostMapping()
	public boolean addCourse(@RequestBody Course course) {
		
		return service.addCourse(course);
	}
	
	@PutMapping()
	public boolean updateCourse(@RequestBody Course course) {
		
		return service.updateCourse(course);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteCourse(@PathVariable String id) {
		
		return service.deleteCourse(id);
	}
}
