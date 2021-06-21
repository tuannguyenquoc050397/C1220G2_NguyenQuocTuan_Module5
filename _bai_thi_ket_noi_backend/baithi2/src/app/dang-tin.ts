import {DanhMuc} from './danh-muc';

export interface DangTin {
  id:number;
  danhMuc: DanhMuc;
  vungMien: string;
  banLa: string;
  banDangTin: string;
  tinhTrang: string;
  diaChi: string;
  dienTich: string;
  huong: string;
  tuaDe: string;
  noiDung: string;
  gia: string;
}
