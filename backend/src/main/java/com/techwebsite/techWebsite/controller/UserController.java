package com.techwebsite.techWebsite.controller;

import com.techwebsite.techWebsite.model.User;
import com.techwebsite.techWebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userServices;

    @PostMapping(value = "/save")
    private ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            userServices.saveOrUpdate(user);
            return ResponseEntity.ok(user.get_id());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping(value = "/getall")
    public Iterable<User> getUsers() {
        return userServices.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<?> update(@RequestBody User user, @PathVariable(name = "id") String _id) {
        try {
            user.set_id(_id);
            userServices.saveOrUpdate(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> deleteUser(@PathVariable("id") String _id) {
        try {
            userServices.deleteUser(_id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @RequestMapping("/search/{id}")
    private ResponseEntity<?> getUser(@PathVariable(name = "id") String userid) {
        try {
            User user = userServices.getUserByID(userid);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
