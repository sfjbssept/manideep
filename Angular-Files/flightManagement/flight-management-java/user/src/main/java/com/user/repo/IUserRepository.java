package com.user.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.entity.LoginUserDetails;

public interface IUserRepository extends JpaRepository<LoginUserDetails, Integer>{

}
