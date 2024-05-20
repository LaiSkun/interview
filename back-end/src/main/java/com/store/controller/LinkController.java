package com.store.controller;


import com.store.model.request.LinkRequest;
import com.store.model.response.BaseResponse;
import com.store.service.LinkService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "link")
public class LinkController {
    @Autowired
    LinkService service;

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> create(@RequestBody LinkRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.create(request));
    }

    @PostMapping(value = "/search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> search(@RequestBody LinkRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.search(request));
    }

    @PostMapping(value = "/delete", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> delete(@RequestBody LinkRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.delete(request));
    }

    @PostMapping(value = "/uselink", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> uselink(@RequestBody LinkRequest request) throws ServiceException {
        return ResponseEntity.status(HttpStatus.OK).body(service.uselink(request));
    }
}
