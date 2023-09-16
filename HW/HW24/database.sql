-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.0.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table f8_orders.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `province_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_customers_province` (`province_id`),
  CONSTRAINT `FK_customers_province` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.customers: ~11 rows (approximately)
INSERT INTO `customers` (`id`, `name`, `email`, `password`, `status`, `province_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(10, 'Luu Anh Quan', 'anhquan@gmail.com', '12345', 1, 1, '2023-08-28 05:03:20', '2023-08-28 05:03:21', NULL),
	(11, 'Duc Anh', 'ducanh@gmail.com', '123456', 1, 2, '2023-08-28 05:03:43', '2023-08-28 05:03:44', NULL),
	(12, 'Hoang An', 'hoangan@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, 3, '2023-08-31 02:12:03', '2023-08-31 02:12:03', NULL),
	(13, 'Pham Hoang', 'phamhaong@gmail.com', '123455', 0, NULL, '2023-08-31 02:36:58', '2023-08-31 02:36:58', '2023-08-31 02:36:59'),
	(14, 'Hieu', 'hieu@gmail.com', '12345', 1, NULL, '2023-08-31 02:51:31', '2023-08-31 02:51:33', NULL),
	(15, 'Minh', 'minh@gmail.com', '12345', 0, 3, '2023-08-31 02:51:50', '2023-08-31 02:51:50', NULL),
	(16, 'Quang Minh', 'quangminh@gmail.com', '1233', 0, 1, '2023-09-07 02:24:32', '2023-09-07 02:24:39', '2023-09-07 02:24:34'),
	(17, 'Nguyen Van A', 'nguyenvana@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, NULL, NULL, NULL, NULL),
	(18, 'Nguyen Van B', 'nguyenvanb@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, NULL, NULL, NULL, NULL),
	(19, 'Nguyen Van C', 'nguyenvanc@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, NULL, '2023-09-07 02:43:32', '2023-09-07 02:43:33', '2023-09-07 02:43:34'),
	(20, 'admin', 'admin', 'c4ca4238a0b923820dcc509a6f75849b', 1, 1, '2023-09-16 01:01:24', '2023-09-16 01:01:25', '2023-09-16 01:01:26');

-- Dumping structure for table f8_orders.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` float NOT NULL,
  `status_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.orders: ~7 rows (approximately)
INSERT INTO `orders` (`id`, `customer_id`, `quantity`, `total`, `status_id`, `created_at`, `updated_at`) VALUES
	(1, 10, 12, 10000, 1, '2023-08-31 02:39:40', '2023-08-31 02:39:41'),
	(2, 10, 20, 5000, 1, '2023-08-31 02:40:10', '2023-08-31 02:40:11'),
	(3, 12, 1, 100000, 2, '2023-08-31 02:42:28', '2023-08-31 02:42:29'),
	(4, 12, 5, 15000, 1, '2023-08-31 02:42:47', '2023-08-31 02:42:48'),
	(5, 14, 12, 32000, 1, '2023-08-31 02:52:09', '2023-08-31 02:52:09'),
	(6, 15, 12, 12000, 2, '2023-08-31 02:52:28', '2023-08-31 02:52:29'),
	(7, 15, 12, 12000, 2, '2023-08-31 02:52:28', '2023-08-31 02:52:29');

-- Dumping structure for table f8_orders.order_detail
CREATE TABLE IF NOT EXISTS `order_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.order_detail: ~3 rows (approximately)
INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `price`, `quantity`, `amount`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 50000, 2, 4, '2023-08-31 03:36:56', '2023-08-31 03:36:57'),
	(2, 5, 2, 20000, 1, 5, '2023-08-31 03:37:14', '2023-08-31 03:37:14'),
	(3, 7, 3, 100000, 2, 10, '2023-08-31 03:37:35', '2023-08-31 03:37:36');

-- Dumping structure for table f8_orders.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT 0,
  `thumbnail` varchar(150) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.products: ~0 rows (approximately)

-- Dumping structure for table f8_orders.product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.product_categories: ~0 rows (approximately)
INSERT INTO `product_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Dien Thoai', '2023-08-31 03:43:13', '2023-08-31 03:43:14');

-- Dumping structure for table f8_orders.province
CREATE TABLE IF NOT EXISTS `province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.province: ~3 rows (approximately)
INSERT INTO `province` (`id`, `name`) VALUES
	(1, 'Ha Noi'),
	(2, 'Da Nang'),
	(3, 'Ho Chi Minh');

-- Dumping structure for table f8_orders.status
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.status: ~2 rows (approximately)
INSERT INTO `status` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Da thanh toan', '2023-08-31 02:39:19', '2023-08-31 02:39:21'),
	(2, 'Dang xu ly', '2023-08-31 02:39:20', '2023-08-31 02:39:22');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
