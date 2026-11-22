package com.sonidovivo.backend.Controller;

import com.sonidovivo.backend.Model.Role;
import com.sonidovivo.backend.Model.User;
import com.sonidovivo.backend.Service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@SecurityRequirement(name="Ingrese token generado en Inicio de sesion")
@Tag(name = "Usuarios")
public class UsuarioController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User User, PasswordEncoder encoder){
        User existingUser = userService.getUserById(id);
        if (existingUser != null){
            existingUser.setNombre(User.getNombre());
            existingUser.setCorreo(User.getCorreo());
            existingUser.setApellido(User.getApellido());
            existingUser.setRegion(User.getRegion());
            existingUser.setCiudad(User.getCiudad());
            existingUser.setDireccion(User.getDireccion());
            existingUser.setPassword(encoder.encode(User.getPassword()));
            existingUser.setTelefono(User.getTelefono());
            existingUser.setRole(Role.ROLE_USER);
            return userService.saveUser(existingUser);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}