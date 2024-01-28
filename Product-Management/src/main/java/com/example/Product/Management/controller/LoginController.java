package com.example.Product.Management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;


import com.example.Product.Management.repository.LoginRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {
	
	 
	
	//@GetMapping("/login1")
	/*private List<LoginModel> getAllLoginModel()
	{
		return LoginService.getAllLoginModel();
		
	}*/
	@GetMapping("/user")
    public String login() {
        

        return ("<h1>Welcome user</h1>");
    }
	/*@PostMapping(path = "/login")
	
	public LoginModel loginAdmin(@RequestBody LoginModel admin) throws Exception {
		String emailid = admin.getEmailid();
		String password = admin.getPassword();
		
		
		LoginModel obj = null;
		if (emailid != null && password != null) {
			obj = repo.findByEmailidAndPassword(emailid,password);
		
			
		}
		if (obj == null) {
			throw new Exception("Invaild email/password");
		}
		return obj;
	}*/

	
	

}
