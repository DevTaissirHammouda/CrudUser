package com.example.cruduser.Service;


import com.example.cruduser.entity.userEntity;

import java.util.List;

public interface UserService {
    public void saveUser(userEntity user);
    public void updateUser(userEntity user);
    public void deleteUser(Long id);
    public List<userEntity> getAllUser();
    public userEntity getUserById(Long id);


}
