package com.store.service.impl;

import com.store.mapper.SellerMapper;
import com.store.model.request.SellerRequest;
import com.store.model.response.BaseResponse;
import com.store.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements SellerService {
    @Autowired
    SellerMapper mapper;


    @Override
    public BaseResponse search(SellerRequest request) {
        return null;
    }

    @Override
    public BaseResponse update(SellerRequest request) {
        return null;
    }

    @Override
    public BaseResponse create(SellerRequest request) {
        return null;
    }

    @Override
    public BaseResponse delete(SellerRequest request) {
        return null;
    }
}
