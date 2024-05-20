package com.store.service;

import com.store.model.request.LinkRequest;

import com.store.model.response.BaseResponse;

public interface LinkService {
    BaseResponse search(LinkRequest request);


    BaseResponse create(LinkRequest request);


    BaseResponse delete(LinkRequest request);


    BaseResponse uselink(LinkRequest request);
}
