package com.store.mapper;

import com.store.model.request.SellerRequest;
import com.store.model.response.SellerResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SellerMapper {
    List<SellerResponse> search(SellerRequest request);
    int update(SellerRequest request);
    int create(SellerRequest request);
    int delete(SellerRequest request);
    int getId();
    int count(SellerRequest request);
}