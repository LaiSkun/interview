package com.store.service.impl;

import com.store.mapper.LinkMapper;
import com.store.model.request.LinkRequest;
import com.store.model.request.UserRequest;
import com.store.model.response.BaseResponse;
import com.store.model.response.LinkResponse;
import com.store.model.response.UserResponse;
import com.store.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinkServiceImpl implements LinkService {
    @Autowired
    LinkMapper mapper;

    @Override
    public BaseResponse search(LinkRequest request) {
        try {
            List<LinkResponse> result = mapper.search(request);
            int count = mapper.count(request);
            if(result != null && count >=0){
                return new BaseResponse(result);
            }
            else {
                return new BaseResponse("1", "Lấy dữ liệu thất bại");
            }
        } catch (Exception e) {
            return new BaseResponse("-1", "Lấy dữ liệu thất bại");
        }
    }

    @Override
    public BaseResponse create(LinkRequest request) {
        try {
            String sanitizedProductName = request.getProductName().replaceAll(" ", "-");
            String link = "http://localhost:3000/use/" + sanitizedProductName + "/" + request.getOwnerLink();
            request.setLink(link);
            int result = mapper.create(request);

            if (result > 0) {
                return new BaseResponse("0", "create successfully");
            } else {
                return new BaseResponse("1", "create failed");
            }
        } catch (Exception e) {
            return new BaseResponse("-1", "create failed");
        }
    }

    @Override
    public BaseResponse delete(LinkRequest request) {
        try {
            int result = mapper.delete(request);

            if (result > 0) {
                return new BaseResponse("0", "delete successfully");
            } else {
                return new BaseResponse("1", "delete failed");
            }
        } catch (Exception e) {
            return new BaseResponse("-1", "delete failed");
        }
    }

    @Override
    public BaseResponse uselink(LinkRequest request) {
        try {
            int result = mapper.useLink(request);

            if (result > 0) {
                return new BaseResponse("0", "uselink successfully");
            } else {
                return new BaseResponse("1", "uselink failed");
            }
        } catch (Exception e) {
            return new BaseResponse("-1", "uselink failed");
        }
    }
}
