package com.store.controller;

import com.store.model.request.SellerRequest;
import com.store.model.response.BaseResponse;
import com.store.service.SellerService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "user")
public class AuthController {
    @Autowired
    private SellerService service;

    @PostMapping(value = "/search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> search(@RequestBody SellerRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.search(request));
    }

    @PostMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> update(@RequestBody SellerRequest request) throws ServiceException {

        return ResponseEntity.status(HttpStatus.OK).body(service.update(request));
    }

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> create(@RequestBody SellerRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.create(request));
    }

    @PostMapping(value = "/delete", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> delete(@RequestBody SellerRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.delete(request));
    }

}
