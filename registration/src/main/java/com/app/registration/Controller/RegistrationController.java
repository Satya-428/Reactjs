package com.app.registration.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;



import com.app.registration.model.User;
import com.app.registration.service.RegistrationService;


@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	@GetMapping("/registeruser")
	public User registerUser (@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailid();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			User userobj=service.fetchUserByEmailId(tempEmailId);
			if(userobj!=null) {
				throw new Exception("user with"+tempEmailId+"is already exist");
			}
			
		}
		User userobj=null;
		userobj=service.saveUser(user);
		return userobj;
		
		
	}

}
