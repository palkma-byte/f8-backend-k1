CREATE DATABASE database_05_PhamHoang;

use database_05_PhamHoang;
CREATE TABLE `PHONG` (
  `MaPhong` varchar(50) PRIMARY KEY,
  `Loaiphong` varchar(50),
  `SoKhachToiDa` int,
  `GiaPhong` float,
  `moTa` text
);

CREATE TABLE `KHACH_HANG` (
  `MaKH` varchar(50) PRIMARY KEY,
  `TenKH` varchar(50),
  `Diachi` varchar(50),
  `SODT` varchar(50) UNIQUE
);

CREATE TABLE `DICH_VU_DI_KEM` (
  `MaDV` varchar(50) PRIMARY KEY,
  `TenDV` varchar(50),
  `DonViTinh` varchar(50),
  `DonGia` float
);

CREATE TABLE `DAT_PHONG` (
  `MaDatPhong` varchar(50) PRIMARY KEY,
  `MaPhong` varchar(50),
  `MaKH` varchar(50),
  `NgayDat` date,
  `GioBatDau` time,
  `GioketThuc` time,
  `TienDatCoc` float,
  `GhiChu` text,
  `TrangThaiDat` varchar(50)
);

CREATE TABLE `CHI_TIET_SU_DUNG_DICH_VU` (
  `MaDatPhong` varchar(50),
  `MaDV` varchar(50),
  `Soluong` int
);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaPhong`) REFERENCES `PHONG` (`MaPhong`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaKH`) REFERENCES `KHACH_HANG` (`MaKH`);

ALTER TABLE `CHI_TIET_SU_DUNG_DICH_VU` ADD FOREIGN KEY (`MaDV`) REFERENCES `DICH_VU_DI_KEM` (`MaDV`);

ALTER TABLE `CHI_TIET_SU_DUNG_DICH_VU`
ADD CONSTRAINT fk_ma_dat_phong
FOREIGN KEY (MaDatPhong)
REFERENCES DAT_PHONG(MaDatPhong)
ON DELETE CASCADE;


-- Insert data into the PHONG (Room) table
INSERT INTO PHONG (MaPhong, Loaiphong, SoKhachToiDa, GiaPhong, moTa)
VALUES
    ('P0001', 'Loai 1', 20, 60000, 'Mo ta cho phong 1'),
    ('P0002', 'Loai 1', 25, 80000, 'Mo ta cho phong 2'),
    ('P0003', 'Loai 2', 15, 50000, 'Mo ta cho phong 3'),
    ('P0004', 'Loai 3', 20, 50000, 'Mo ta cho phong 4');

-- Insert data into the KHÁCH HÀNG (Customer) table
INSERT INTO KHACH_HANG (MaKH, TenKH, Diachi, SODT)
VALUES
    ('KH0001', 'Nguyen Van A', 'Hoa xuan', '1111111'),
    ('KH0002', 'Nguyen Van B', 'Hoa hai', '11111112'),
    ('KH0003', 'Phan Van A', 'Cam le', '11111113'), 
    ('KH0004', 'Phan Van B', 'Hoa xuan', '11111114'); 

-- Insert data into the DICH VU DI KEM (Additional Service) table
INSERT INTO DICH_VU_DI_KEM (MaDV, TenDV, DonViTinh, DonGia)
VALUES
    ('DV001', 'Beer', 'lon', 10000),
    ('DV002', 'Nuoc ngot', 'lon', 8000),
    ('DV003', 'Trai cay', 'dia', 35000),
    ('DV004', 'Khan uot', 'cai', 2000);

-- Insert data into the DAT PHONG (Reservation) table
INSERT INTO DAT_PHONG (MaDatPhong, MaPhong, MaKH, NgayDat, GioBatDau, GioketThuc, TienDatCoc, TrangThaiDat)
VALUES
    ('DP0001', 'P0001', 'KH0002', '2018-03-26', '11:00', '13:30', 100000, 'Da dat'),
    ('DP0002', 'P0001', 'KH0003', '2018-03-27', '17:15', '19:15', 50000, 'Da huy'),
    ('DP0003', 'P0002', 'KH0002', '2018-03-26', '20:30', '22:15', 100000, 'Da dat'),
    ('DP0004', 'P0003', 'KH0001', '2018-04-01', '19:30', '21:15', 200000, 'Da dat');

-- Insert data into the CHI TIET SU DUNG DICH VU (Service Usage) table
INSERT INTO CHI_TIET_SU_DUNG_DICH_VU (MaDatPhong, MaDV, Soluong)
VALUES
    ('DP0001', 'DV001', 20),
    ('DP0001', 'DV003', 3),
    ('DP0001', 'DV002', 10),
    ('DP0002', 'DV002', 10),
    ('DP0002', 'DV003', 1), 
    ('DP0003', 'DV003', 2), 
    ('DP0003', 'DV004', 10);
    
    -----------------------
    -----------------------
-- Bai 1
use database_05_PhamHoang;
SELECT
    DAT_PHONG.MaDatPhong,
    DAT_PHONG.MaPhong,
    PHONG.Loaiphong,
    PHONG.GiaPhong,
    KHACH_HANG.TenKH,
    DAT_PHONG.NgayDat,
    (PHONG.GiaPhong * 
        ((HOUR(DAT_PHONG.GioKetThuc) - HOUR(DAT_PHONG.GioBatDau)) + 
        (MINUTE(DAT_PHONG.GioKetThuc) - MINUTE(DAT_PHONG.GioBatDau)) / 60)
    ) AS TongTienHat,
    SUM(IFNULL(CHI_TIET_SU_DUNG_DICH_VU.SoLuong * DICH_VU_DI_KEM.DonGia, 0)) AS TongTienSuDungDichVu,
    (PHONG.GiaPhong * 
        ((HOUR(DAT_PHONG.GioKetThuc) - HOUR(DAT_PHONG.GioBatDau)) + 
        (MINUTE(DAT_PHONG.GioKetThuc) - MINUTE(DAT_PHONG.GioBatDau)) / 60)
    ) + 
    SUM(IFNULL(CHI_TIET_SU_DUNG_DICH_VU.SoLuong * DICH_VU_DI_KEM.DonGia, 0)) AS TongTienThanhToan
FROM DAT_PHONG
INNER JOIN PHONG ON DAT_PHONG.MaPhong = PHONG.MaPhong
INNER JOIN KHACH_HANG ON DAT_PHONG.MaKH = KHACH_HANG.MaKH
LEFT JOIN CHI_TIET_SU_DUNG_DICH_VU ON DAT_PHONG.MaDatPhong = CHI_TIET_SU_DUNG_DICH_VU.MaDatPhong
LEFT JOIN DICH_VU_DI_KEM ON CHI_TIET_SU_DUNG_DICH_VU.MaDV = DICH_VU_DI_KEM.MaDV
GROUP BY DAT_PHONG.MaDatPhong
ORDER BY DAT_PHONG.MaDatPhong;

-- Bai 2
use database_05_PhamHoang;
SELECT DISTINCT DAT_PHONG.MaKH,KHACH_HANG.TenKH,KHACH_HANG.Diachi,KHACH_HANG.SODT FROM DAT_PHONG 
INNER JOIN KHACH_HANG ON KHACH_HANG.MaKH = DAT_PHONG.MaKH
WHERE Diachi = "Hoa xuan";


-- Bai 3
use database_05_PhamHoang;
SELECT PHONG.MaPhong, PHONG.LoaiPhong, PHONG.SoKhachToiDa, PHONG.GiaPhong, 
       COUNT(DAT_PHONG.MaPhong) AS SoLanDat
FROM PHONG
INNER JOIN DAT_PHONG ON PHONG.MaPhong = DAT_PHONG.MaPhong
WHERE DAT_PHONG.TrangThaiDat = 'Da dat'
GROUP BY PHONG.MaPhong
HAVING COUNT(DAT_PHONG.MaPhong) > 2;
