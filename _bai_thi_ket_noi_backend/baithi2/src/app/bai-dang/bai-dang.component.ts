import {Component, OnInit} from '@angular/core';
import {DangTin} from '../dang-tin';
import {DangTinService} from '../dang-tin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bai-dang',
  templateUrl: './bai-dang.component.html',
  styleUrls: ['./bai-dang.component.css']
})
export class BaiDangComponent implements OnInit {

  dangTins: DangTin[];

  gia: string = '';
  dienTich: string = '';
  message: string = '';

  constructor(private dangTinService: DangTinService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadList();
  }


  loadList() {
    this.dangTinService.findAll().subscribe((data) => {
      this.dangTins = data;
    });
  }

  setDienTich($event: any) {
    this.dienTich = $event.target.value;
  }

  search() {
    this.dangTinService.findAll().subscribe(value => {
      let baiDangSearch: DangTin[] = [];
      for (let i = 0; i < value.length; i++) {
        if (this.dienTich == value[i].dienTich || this.dienTich == '') {
          if (this.gia == value[i].gia || this.gia == '') {
            if (this.huong == value[i].huong || this.huong == '') {
              baiDangSearch.push(value[i]);
            }
          }
        }
      }
      this.dangTins = baiDangSearch;
      if (this.dangTins.length === 0) {
        this.message = 'không có bài đăng phù hợp.';
      } else {
        this.message = '';
      }
    });
  }

  setGia($event: any) {
    this.gia = $event.target.value;
  }

  huong: string = '';

  setHuong($event: any) {
    this.huong = $event.target.value;
    console.log(this.huong);
  }

  delete(id: number) {
    this.dangTinService.delete(Number(id)).subscribe(value => {
      this.loadList();
    }, error => {

    }, () => {
    });
  }
}
