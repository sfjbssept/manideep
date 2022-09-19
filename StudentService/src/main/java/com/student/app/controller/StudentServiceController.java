package com.student.app.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.student.app.entity.Student;

@RestController
public class StudentServiceController {
	private static Map<String, List<Student>> schoolDb = new HashMap<>();

	static {
//		List<Student> lst = new ArrayList<Student>();

		List<Student> lst1, lst2, lst3;
		Student s1, s2, s3, s4, s5;

		s1 = new Student("Manideep", "class 10");
		s2 = new Student("sreekar", "class 10");
		s3 = new Student("deep", "class 11");
		s4 = new Student("bhargav", "class 12");
		s5 = new Student("kiran", "class 12");
//		lst.add(s1);

		lst1 = Arrays.asList(s1, s2);
		lst2 = Arrays.asList(s3, s4);
		lst3 = Arrays.asList(s5);

		schoolDb.put("school_1", lst1);
		schoolDb.put("school_2", lst2);
		schoolDb.put("school_3", lst3);
	}

	@RequestMapping(value = "/getStudentDetailsForSchool/{schoolName}", method = RequestMethod.GET)
	public List<Student> getStudents(@PathVariable String schoolName) {
		System.out.println("Getting student details of school - " + schoolName);
		List<Student> studentList = schoolDb.get(schoolName);
		if (studentList == null) {
			studentList = new ArrayList<Student>();
			Student stud = new Student("data Not found", "NA");
			studentList.add(stud);
		}
		return studentList;
	}

}
