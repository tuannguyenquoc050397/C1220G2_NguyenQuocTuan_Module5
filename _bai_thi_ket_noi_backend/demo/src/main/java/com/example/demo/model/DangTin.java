package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Table
@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class DangTin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String vungMien;
    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    private String diaChi;
    private String dienTich;
    private String huong;
    private String tuaDe;
    private String noiDung;
    private String gia;

    @ManyToOne
    @JoinColumn(name="danhMuc_id", nullable = false)
    private DanhMuc danhMuc;

    public DangTin(Integer id, String vungMien, String banLa, String banDangTin, String tinhTrang, String diaChi, String dienTich, String huong, String tuaDe, String noiDung, String gia, DanhMuc danhMuc) {
        this.id = id;
        this.vungMien = vungMien;
        this.banLa = banLa;
        this.banDangTin = banDangTin;
        this.tinhTrang = tinhTrang;
        this.diaChi = diaChi;
        this.dienTich = dienTich;
        this.huong = huong;
        this.tuaDe = tuaDe;
        this.noiDung = noiDung;
        this.gia = gia;
        this.danhMuc = danhMuc;
    }

    public DangTin() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getVungMien() {
        return vungMien;
    }

    public void setVungMien(String vungMien) {
        this.vungMien = vungMien;
    }

    public String getBanLa() {
        return banLa;
    }

    public void setBanLa(String banLa) {
        this.banLa = banLa;
    }

    public String getBanDangTin() {
        return banDangTin;
    }

    public void setBanDangTin(String banDangTin) {
        this.banDangTin = banDangTin;
    }

    public String getTinhTrang() {
        return tinhTrang;
    }

    public void setTinhTrang(String tinhTrang) {
        this.tinhTrang = tinhTrang;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getDienTich() {
        return dienTich;
    }

    public void setDienTich(String dienTich) {
        this.dienTich = dienTich;
    }

    public String getHuong() {
        return huong;
    }

    public void setHuong(String huong) {
        this.huong = huong;
    }

    public String getTuaDe() {
        return tuaDe;
    }

    public void setTuaDe(String tuaDe) {
        this.tuaDe = tuaDe;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public DanhMuc getDanhMuc() {
        return danhMuc;
    }

    public void setDanhMuc(DanhMuc danhMuc) {
        this.danhMuc = danhMuc;
    }
}
