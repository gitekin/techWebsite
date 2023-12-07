package com.techwebsite.techWebsite.service;

import com.techwebsite.techWebsite.model.Request;
import com.techwebsite.techWebsite.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public Request saveRequest(Request request) {
        return requestRepository.save(request);
    }

    public List<Request> getAllRequests() {
        // Logic to retrieve all requests from the repository
        return requestRepository.findAll();
    }
}