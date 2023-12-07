package com.techwebsite.techWebsite.repository;


import com.techwebsite.techWebsite.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequestRepository extends MongoRepository<Request, String> {
    // Custom query methods if needed
}