package com.techwebsite.service;

import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;

public class MongoConnectionTest {

    public static void main(String[] args) {
        try {
            // Connect to MongoDB instance running on localhost
            MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");

            // Select a database (will create one if it doesn't exist)
            MongoDatabase database = mongoClient.getDatabase("testDatabase");

            // If no exception is thrown, connection is successful
            System.out.println("Connected to MongoDB!");

            // Your database interaction code goes here

            // Close the connection when done
            mongoClient.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Failed to connect to MongoDB.");
        }
    }
}
