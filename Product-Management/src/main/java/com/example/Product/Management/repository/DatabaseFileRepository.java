package com.example.Product.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Product.Management.model.FileModel;


@Repository
public interface DatabaseFileRepository extends JpaRepository<FileModel, String> {

}