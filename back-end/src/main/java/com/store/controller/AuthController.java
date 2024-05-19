package com.store.controller;

import com.store.model.request.LinkRequest;
import com.store.model.request.UserRequest;
import com.store.model.response.BaseResponse;
import com.store.service.UserService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "seller")
public class AuthController {
    @Autowired
    private UserService service;

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> search(@RequestBody UserRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.search(request));
    }


    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> create(@RequestBody UserRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.create(request));
    }


    @PostMapping(value = "/refferal", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> createRefferalCode(@RequestBody UserRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.create_refferal_code(request));
    }


}
