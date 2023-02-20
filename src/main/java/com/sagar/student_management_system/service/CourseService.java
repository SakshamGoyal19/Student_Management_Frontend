package com.sagar.student_management_system.service;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sagar.student_management_system.bean.Course;
import com.sagar.student_management_system.bean.Generate;
import com.sagar.student_management_system.repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	
	public List<Course> getCourses(){
		
		return repository.findAll();
	}
	
    public Course getCourse(String id) {
		
		try {
			return repository.findById(id).get();
		}
		catch(NoSuchElementException ex) {
			return new Course();
		}
	}
	
	public boolean addCourse(Course course) {
		
		course.setId(Generate.generateID(course.getBranch()));
		if(repository.existsById(course.getId()))
			return false;
		repository.insert(course);
		return true;
	}
	
	public boolean deleteCourse(String id) {
		
		if(!repository.existsById(id)) return false;
		repository.deleteById(id);
		return true;
	}
	
	public boolean updateCourse(Course course) {
		
		if(!repository.existsById(course.getId())) return false;
		repository.save(course);
		return true;
	}
}
