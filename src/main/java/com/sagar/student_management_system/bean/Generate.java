package com.sagar.student_management_system.bean;

public class Generate {
	
	public static String generatePassword(String name) {
		
		String firstName = name.split(" ")[0];
		return firstName + firstName.length();
	}
	
    public static String generateID(String name) {
		
		String firstName = name.split(" ")[0];
		return firstName + firstName.length()*firstName.length();
	}
}
