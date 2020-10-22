package com.app.registration.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.registration.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String emailId);

}