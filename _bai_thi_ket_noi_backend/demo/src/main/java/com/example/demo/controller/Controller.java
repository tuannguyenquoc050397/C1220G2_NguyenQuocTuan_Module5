package com.example.demo.controller;

import com.example.demo.model.DangTin;
import com.example.demo.model.DanhMuc;
import com.example.demo.repository.DangTinRepository;
import com.example.demo.repository.DanhMucRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class Controller {

    @Autowired
    private DangTinRepository dangTinRepository;
    @Autowired
    private DanhMucRepository danhMucRepository;


    @RequestMapping(value = "/listDangTin", method = RequestMethod.GET)
    public List<DangTin> getListDangTin() {
        return this.dangTinRepository.findAll();
    }

    @PostMapping(value = "/listDangTin")
    public void create(@RequestBody DangTin dangTin) {
        this.dangTinRepository.save(dangTin);
    }

    @PutMapping(value = "/listDangTin")
    public void update(@RequestBody DangTin dangTin) {
        this.dangTinRepository.save(dangTin);
    }

    @DeleteMapping(value = "/listDangTin/{id}")
    public void delete(@PathVariable Integer id) {
        this.dangTinRepository.deleteById(id);
    }

    @RequestMapping(value = "/listDanhMuc", method = RequestMethod.GET)
    public List<DanhMuc> getListDanhMuc() {
        return this.danhMucRepository.findAll();
    }
}
