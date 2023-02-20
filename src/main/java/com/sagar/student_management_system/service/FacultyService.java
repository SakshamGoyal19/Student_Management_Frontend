package com.sagar.student_management_system.service;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sagar.student_management_system.bean.Faculty;
import com.sagar.student_management_system.bean.Generate;
import com.sagar.student_management_system.repository.FacultyRepository;

@Service
public class FacultyService {
	
	@Autowired
	private FacultyRepository repository;
	
	public List<Faculty> getFaculty(){
		
		return repository.findAll();
	}
	
	public Faculty getFaculty(String id) {
		
		try {
			return repository.findById(id).get();
		}
		catch(NoSuchElementException ex) {
			return new Faculty();
		}
	}
	
	public boolean addFaculty(Faculty faculty) {
		
		faculty.setId(Generate.generateID(faculty.getName()));
		faculty.setPassword(Generate.generatePassword(faculty.getName()));
		if(repository.existsById(faculty.getId()))
			return false;
		repository.insert(faculty);
		return true;
	}
	
	public boolean deleteFaculty(String id) {
		
		if(!repository.existsById(id)) return false;
		repository.deleteById(id);
		return true;
	}
	
	public boolean updateFaculty(Faculty faculty) {
		
		if(!repository.existsById(faculty.getId())) return false;
		repository.save(faculty);
		return true;
	}
}

