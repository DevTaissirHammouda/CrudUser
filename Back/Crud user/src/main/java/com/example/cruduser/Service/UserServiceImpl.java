package com.example.cruduser.Service;

import com.example.cruduser.Repository.UserRepository;
import com.example.cruduser.entity.userEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {

private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(userEntity user) {


        if (user.getName() == null || user.getName().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }

else

        userRepository.save(user);
    }

    @Override
    public void updateUser(userEntity user) {
        userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<userEntity> getAllUser() {
        return userRepository.findAll();
    }



    @Override
    public userEntity getUserById(Long id) {
        return (userEntity) userRepository.findById(id).get();
    }
}
