package com.example.demo.repository;

import com.example.demo.model.DanhMuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface DanhMucRepository extends JpaRepository<DanhMuc, Integer> {
}
