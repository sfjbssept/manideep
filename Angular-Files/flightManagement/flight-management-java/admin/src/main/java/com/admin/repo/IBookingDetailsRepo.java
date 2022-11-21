package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.entity.BookingDetails;

public interface IBookingDetailsRepo extends JpaRepository<BookingDetails, Integer>{

}
