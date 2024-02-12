package com.example.cruduser.Controller;

import com.example.cruduser.Service.UserService;
import com.example.cruduser.entity.userEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void saveUser(@RequestBody userEntity user) {
        userService.saveUser(user);
    }

    @PutMapping
    public void updateUser(@RequestBody userEntity user) {
        userService.updateUser(user);

    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }

    @GetMapping
    public List<userEntity> getAllUser() {
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public userEntity getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }
}
