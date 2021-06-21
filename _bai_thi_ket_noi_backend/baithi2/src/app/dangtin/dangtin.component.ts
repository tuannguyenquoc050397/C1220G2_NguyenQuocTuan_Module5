import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DanhMuc} from '../danh-muc';
import {DangTinService} from '../dang-tin.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dangtin',
  templateUrl: './dangtin.component.html',
  styleUrls: ['./dangtin.component.css']
})
export class DangtinComponent implements OnInit {

  danhMucs: DanhMuc[];
  dangTinForm: FormGroup = new FormGroup({
    danhMuc:new FormControl(),
    vungMien:new FormControl(),
    banLa:new FormControl(),
    banDangTin:new FormControl(),
    tinhTrang:new FormControl(),
    diaChi:new FormControl('', Validators.required),
    dienTich:new FormControl('', [Validators.required, Validators.min(20)]),
    huong:new FormControl(),
    tuaDe:new FormControl('', Validators.required),
    noiDung:new FormControl('', Validators.required),
    gia:new FormControl('', [Validators.required, Validators.min(100000000)]),
});
  constructor(private dangTinService: DangTinService,
              private router: Router,
              private toastService: ToastrService) { }

  ngOnInit(): void {
    this.dangTinService.findAllDanhMuc().subscribe(value => {
      this.danhMucs = value;
    })
  }



  submit() {
    const dangTin = this.dangTinForm.value;
    this.dangTinService.save(dangTin).subscribe(() => {
      this.callToastr();
    }, e => {

    }, () =>{
      this.router.navigateByUrl('/list');
    });
  }
  callToastr(){
    this.toastService.success("success.....","đăng tin thành công", {
      timeOut : 2000,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }

  danhMucP: string = '';
  vungMienP: string = '';
  banLaP: string = '';
  huongP: string = '';
  tinhTrangP: string = '';
  diaChiP: string = '';
  dienTichP: string = '';
  noiDungP: string = '';
  giaP: string = '';

  passData(){

  }
}
