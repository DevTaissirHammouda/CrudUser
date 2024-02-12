package com.example.cruduser.entity;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "user1")
public class userEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
@NotNull
    private Long id;

    private String name;


    private String email;

    @NonNull
    private String password;
    @NonNull
    private String role;

}
