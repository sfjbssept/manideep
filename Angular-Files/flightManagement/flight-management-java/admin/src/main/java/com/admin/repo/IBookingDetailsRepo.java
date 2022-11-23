package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.admin.entity.BookingDetails;

public interface IBookingDetailsRepo extends JpaRepository<BookingDetails, Integer>{
	
	@Query("Select b.pnr from BookingDetails b")
	public List<String> getPnrList();
}
