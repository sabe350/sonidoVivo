package com.sonidovivo.backend.Security;

import com.sonidovivo.backend.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
import com.sonidovivo.backend.Repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String correo){
        User user = repository.findByCorreo(correo).orElseThrow();

        return new org.springframework.security.core.userdetails.User(user.getCorreo(), user.getPassword(), List.of(new SimpleGrantedAuthority(user.getRole().name())));
    }
}
