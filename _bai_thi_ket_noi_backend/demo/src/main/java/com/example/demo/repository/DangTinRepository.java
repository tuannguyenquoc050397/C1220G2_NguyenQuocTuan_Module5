package com.example.demo.repository;

import com.example.demo.model.DangTin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface DangTinRepository extends JpaRepository<DangTin, Integer> {
}
