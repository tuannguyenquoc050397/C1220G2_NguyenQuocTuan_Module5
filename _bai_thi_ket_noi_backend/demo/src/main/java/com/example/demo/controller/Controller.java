package com.example.demo.controller;

import com.example.demo.model.DangTin;
import com.example.demo.model.DanhMuc;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class Controller {

    private List<DangTin> dangTins = this.buildData();

public List<DangTin> buildData(){
    List<DangTin> dangTinList = new ArrayList<>();
    dangTinList.add(new DangTin(1,"Ha Noi","Ca nhan", "Cho Thue",
            "Moi","Ha Noi","123","Dong",
            "tua de","noi dung","1231",new DanhMuc(1,"123")));
    dangTinList.add(new DangTin(2,"Da Nang","Ca nhan", "Cho Thue",
            "Moi","Ha Noi","123","Dong",
            "tua de","noi dung","1231",new DanhMuc(1,"123")));
    dangTinList.add(new DangTin(3,"Ho Chi Minh","Ca nhan", "Cho Thue",
            "Moi","Ha Noi","123","Dong",
            "tua de","noi dung","1231",new DanhMuc(1,"123")));
    return dangTinList;
}

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public List<DangTin> getEmployees() {
        return this.dangTins;
    }

    @PostMapping(value = "/list")
    public void create(@RequestBody DangTin dangTin){
        this.dangTins.add(dangTin);
    }
}
