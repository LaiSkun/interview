package com.store.model.response;

public class UserResponse {
    String userId;
    String email ;
    String name;
    String password;
    String refferalCode;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRefferalCode() {
        return refferalCode;
    }

    public void setRefferalCode(String refferalCode) {
        this.refferalCode = refferalCode;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}

