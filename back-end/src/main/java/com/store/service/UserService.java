package com.store.service;

import com.store.model.request.UserRequest;
import com.store.model.response.BaseResponse;

public interface UserService {
    BaseResponse search(UserRequest request);

    BaseResponse update(UserRequest request);

    BaseResponse create(UserRequest request);

    BaseResponse create_refferal_code(UserRequest request);

    BaseResponse delete(UserRequest request);
}
