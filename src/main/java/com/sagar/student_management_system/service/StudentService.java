package com.sagar.student_management_system.service;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sagar.student_management_system.bean.Generate;
import com.sagar.student_management_system.bean.Student;
import com.sagar.student_management_system.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository repository;
	
	public List<Student> getStudents(){
		
		return repository.findAll();
	}
	
	public Student getStudent(String id) {
		
		try {
			return repository.findById(id).get();
		}
		catch(NoSuchElementException ex) {
			return new Student();
		}
	}
	
	public boolean addStudent(Student student) {
		
		student.setId(Generate.generateID(student.getName()));
		student.setPassword(Generate.generatePassword(student.getName()));
		if(repository.existsById(student.getId()))
			return false;
		repository.insert(student);
		return true;
	}
	
	public boolean deleteStudent(String id) {
		
		if(!repository.existsById(id))
			return false;
		repository.deleteById(id);
		System.out.println("true");
		return true;
	}
	
	public boolean updateStudent(Student student) {
		if(!repository.existsById(student.getId())) return false;
	    repository.save(student);
		return true;
	}
}
