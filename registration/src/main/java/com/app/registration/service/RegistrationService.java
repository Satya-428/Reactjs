package com.app.registration.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.registration.Repository.RegistrationRepository;
import com.app.registration.model.User;


@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	
	public User saveUser(User user) {
		return repo.save(user);

	}
	public User fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);
		
		
	}

}
