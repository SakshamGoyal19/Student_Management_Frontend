package com.sagar.student_management_system.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sagar.student_management_system.bean.Faculty;
import com.sagar.student_management_system.bean.Login;
import com.sagar.student_management_system.bean.Student;
import com.sagar.student_management_system.repository.FacultyRepository;
import com.sagar.student_management_system.repository.StudentRepository;

@RestController
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
	StudentRepository stu;
	
	@Autowired
	FacultyRepository fac;
	
	@PostMapping("/login")
	public Object login(@RequestBody Login login) {
		
		if(login.getType().equals("Student")) {
			
			Student student;
			try {
				student = stu.findById(login.getId()).get();
			}
			catch(NoSuchElementException ex) {
				return new Student();
			}
			if(!login.getPassword().equals(student.getPassword()))
				return new Student();
			return student;
		}
        if(login.getType().equals("Faculty")) {
			
			Faculty faculty;
			try {
				faculty = fac.findById(login.getId()).get();
			}
			catch(NoSuchElementException ex) {
				return new Faculty();
			}
			if(!login.getPassword().equals(faculty.getPassword()))
				return new Faculty();
			return faculty;
		}
        return null;
	}
}