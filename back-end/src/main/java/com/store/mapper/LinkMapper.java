package com.store.mapper;

import com.store.model.request.LinkRequest;
import com.store.model.response.LinkResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LinkMapper {
    List<LinkResponse> search(LinkRequest request);
    int create(LinkRequest request);
    int delete(LinkRequest request);
    int count(LinkRequest request);
    int useLink(LinkRequest request);
}
