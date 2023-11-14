package techwebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import techwebsite.model.User;
import techwebsite.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        // Saving the user to MongoDb
        return userRepository.save(user);
    }

    // Other methods like findUser, deleteUser (maybe)
}
