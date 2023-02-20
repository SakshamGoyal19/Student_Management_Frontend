package com.sagar.student_management_system.controller;

import java.util.Collection;

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
import com.sagar.student_management_system.bean.Faculty;
import com.sagar.student_management_system.service.FacultyService;

@RestController
@RequestMapping("/faculty")
@CrossOrigin("*")
public class FacultyController {
	
	@Autowired
	private FacultyService service;
	
	@GetMapping()
	public Collection<Faculty> getFaculty(){
		
		return service.getFaculty();
	}
	
	@GetMapping("/{id}")
	public Faculty getFaculty(@PathVariable String id) {
		
		return service.getFaculty(id);
	}
	
	@PostMapping()
	public boolean addFaculty(@RequestBody Faculty faculty) {
		
		return service.addFaculty(faculty);
	}
	
	@PutMapping()
	public boolean updateFaculty(@RequestBody Faculty faculty) {
		
		return service.updateFaculty(faculty);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteFaculty(@PathVariable String id) {
		
		return service.deleteFaculty(id);
	}
}

