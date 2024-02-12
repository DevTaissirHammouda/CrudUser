package com.example.cruduser.Repository;

import com.example.cruduser.entity.userEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<userEntity, Long> {
}
