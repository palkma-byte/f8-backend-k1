CREATE DATABASE database_04_PhamHoang;

use database_04_PhamHoang;
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
  `SODT` varchar(50)
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
  `NgayDat` Date,
  `GioBatDau` timestamp,
  `GioketThuc` timestamp,
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
    ('KH0004', 'Phan Van B', 'Hoa xuân', '11111114'); 

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

-------------------------
 


-- B1
-- SELECT * FROM CHI_TIET_SU_DUNG_DICH_VU WHERE (Soluong > 3 AND Soluong < 10);

-- B2
-- UPDATE Phong set GiaPhong = GiaPhong + 10000 WHERE SoKhachToiDa > 10;

-- B3
-- DELETE FROM DAT_PHONG WHERE TrangThaiDat = 'Da huy';

-- B4
   
-- SELECT TenKH
-- FROM KHACH_HANG
-- WHERE (TenKH LIKE 'H%' OR TenKH LIKE 'N%' OR TenKH LIKE 'M%')
--   AND LENGTH(TenKH) < 20;

-- B5 

-- SELECT DISTINCT TenKH
-- FROM KHACH_HANG;

-- B6

-- SELECT MaDV,TenDV,DonViTinh,DonGia FROM DICH_VU_DI_KEM
-- WHERE (DonViTinh = 'lon' AND DonGia > 10000) OR (DonViTinh = 'cai' AND DonGia < 5000);

-- B7
use database_04_PhamHoang;
SELECT
    DAT_PHONG.MaDatPhong,
    DAT_PHONG.MaPhong,
    PHONG.Loaiphong,
    PHONG.SoKhachToiDa,
    PHONG.GiaPhong,
    DAT_PHONG.MaKH,
    KHACH_HANG.TenKH,
    KHACH_HANG.SODT,
    DAT_PHONG.NgayDat,
    DAT_PHONG.GioBatDau,
    DAT_PHONG.GioketThuc,
    DICH_VU_DI_KEM.MaDV,
    CHI_TIET_SU_DUNG_DICH_VU.Soluong,
    DICH_VU_DI_KEM.DonGia
FROM DAT_PHONG
RIGHT JOIN PHONG ON DAT_PHONG.MaPhong = PHONG.MaPhong
RIGHT JOIN KHACH_HANG ON DAT_PHONG.MaKH = KHACH_HANG.MaKH
LEFT JOIN CHI_TIET_SU_DUNG_DICH_VU ON DAT_PHONG.MaDatPhong = CHI_TIET_SU_DUNG_DICH_VU.MaDatPhong
LEFT JOIN DICH_VU_DI_KEM ON CHI_TIET_SU_DUNG_DICH_VU.MaDV = DICH_VU_DI_KEM.MaDV
WHERE (YEAR(DAT_PHONG.NgayDat) = 2016 OR YEAR(DAT_PHONG.NgayDat) = 2018)
    AND PHONG.GiaPhong > 50000;
