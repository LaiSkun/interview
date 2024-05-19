package com.store.service;

import com.store.model.request.SellerRequest;
import com.store.model.response.BaseResponse;

public interface SellerService {
    BaseResponse search(SellerRequest request);

    BaseResponse update(SellerRequest request);

    BaseResponse create(SellerRequest request);

    BaseResponse create_refferal_code(SellerRequest request);

    BaseResponse delete(SellerRequest request);
}
