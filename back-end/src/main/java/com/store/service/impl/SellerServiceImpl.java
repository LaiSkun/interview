package com.store.service.impl;

import com.store.mapper.SellerMapper;
import com.store.model.request.SellerRequest;
import com.store.model.response.BaseResponse;
import com.store.model.response.SellerResponse;
import com.store.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.security.MessageDigest;
import java.util.UUID;

@Service
public class SellerServiceImpl implements SellerService {
    @Autowired
    SellerMapper mapper;


    @Override
    public BaseResponse search(SellerRequest request) {
        try {
            SellerResponse seller = mapper.search(request);
            if (seller != null && request.getPassword().equals(seller.getPassword()) && request.getEmail().equals(seller.getEmail())){
                return new BaseResponse("0", "Login successful");
            } else {
                return new BaseResponse("-1", "Invalid email or password");
            }
        } catch (Exception e) {
            return new BaseResponse("1", "create failed");
        }
    }

    @Override
    public BaseResponse update(SellerRequest request) {
        return null;
    }

    @Override
    public BaseResponse create(SellerRequest request) {
        try {
            Integer checkExisted = mapper.checkEmailExist(request);
            if (checkExisted != null && checkExisted > 0) {
                return new BaseResponse("1", "create failed");
            }
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
    public BaseResponse create_refferal_code(SellerRequest request) {
        try {
            String input = request.getEmail() ;
            // Sử dụng thuật toán SHA-256 để băm chuỗi đầu vào
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(input.getBytes());

            // Chuyển đổi mảng byte thành chuỗi hex
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            String referralCode = hexString.toString();

            return new BaseResponse(referralCode);
        } catch (Exception e) {
            return new BaseResponse("-1", "create failed");
        }
    }

    @Override
    public BaseResponse delete(SellerRequest request) {
        return null;
    }
}
