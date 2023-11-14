package.techwebsite.controller;

@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody RegistrationData data) {
        // Validate data, saving the user and email sending will be done here
        //notification emails about a new product (maybe)

        emailService.sendEmail(data.getEmail(), "Welcome to Our Service", "Your registration was successful.");

        return ResponseEntity.ok("User registered successfully");
        }

public class RegistrationData {
    private String username;
    private String email;
    private String password;

}
