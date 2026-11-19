package com.sonidovivo.backend;

import com.sonidovivo.backend.Model.Role;
import com.sonidovivo.backend.Model.User;
import com.sonidovivo.backend.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	CommandLineRunner init(UserRepository repo, PasswordEncoder encoder){
		return args ->{
			if(repo.findByCorreo("admin@admin.com").isEmpty()){
				User user = new User();
				user.setCorreo("admin@admin.com");
				user.setNombre("admin");
				user.setApellido("admin");
				user.setTelefono(123456789);
				user.setPassword(encoder.encode("1234"));
				user.setRole(Role.ROLE_ADMIN);
				repo.save(user);
			}
		};
	}

}
