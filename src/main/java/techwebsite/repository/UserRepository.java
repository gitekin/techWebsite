package techwebsite.repository;

import techwebsite.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
   //for the CRUD implementation
}


