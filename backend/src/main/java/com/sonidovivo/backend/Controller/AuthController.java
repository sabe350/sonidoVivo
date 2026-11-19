package com.sonidovivo.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.sonidovivo.backend.Model.User;
import com.sonidovivo.backend.DTO.AuthResponse;
import com.sonidovivo.backend.DTO.LoginRequest;
import com.sonidovivo.backend.Security.JwtService;
import com.sonidovivo.backend.Service.UserService;

@RestController
@RequestMapping(path="/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value="/login")
    public AuthResponse login(@RequestBody LoginRequest request){
        User user = userService.findByCorreo(request.getCorreo());

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Credenciales Invalidas");
        }

        String token = jwtService.generatedToken(user.getCorreo());

        return new AuthResponse(token);
    }
}
