package com.store.mapper;

import com.store.model.request.UserRequest;
import com.store.model.response.UserResponse;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    UserResponse search(UserRequest request);
    int update(UserRequest request);
    int create(UserRequest request);
    int delete(UserRequest request);
    int count(UserRequest request);
    Integer checkEmailExist(UserRequest request);
}
