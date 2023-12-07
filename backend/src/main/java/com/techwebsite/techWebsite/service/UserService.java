package com.techwebsite.techWebsite.service;

import com.techwebsite.techWebsite.model.User;
import com.techwebsite.techWebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

        public void saveOrUpdate(User user) throws Exception {
            // Check if user with the same email already exists
            if (user.getEmail() != null && repo.findByEmail(user.getEmail()).isPresent()) {
                throw new Exception("EmailExists");
            }
            repo.save(user);
        }
    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {
        repo.deleteById(id);
    }

    public User getUserByID(String userid) {
        return repo.findById(userid).get();
    }
}

