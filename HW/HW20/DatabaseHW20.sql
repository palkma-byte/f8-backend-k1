CREATE DATABASE database_03_PhamHoang;

USE database_03_PhamHoang;

CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `code` VARCHAR(15) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `original_price` FLOAT,
  `sale_price` FLOAT,
  `description` TEXT,
  `stock_quantity` INT NOT NULL,
  `usage_instructions` TEXT,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `attributes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `value` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `product_attributes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `attribute_id` INT,
  `product_id` INT,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP,
  FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);


INSERT INTO `products` (`code`, `name`, `original_price`, `sale_price`, `description`, `stock_quantity`, `usage_instructions`, `created_at`, `updated_at`)
VALUES
  ('P1001', 'Product A', 100.0, 85.0, 'Description A', 50, 'usage instructions A', NOW(), NOW()),
  ('P1002', 'Product B', 150.0, 120.0, 'Description B', 30, 'usage instructions B', NOW(), NOW()),
  ('P1003', 'Product C', 200.0, 180.0, 'Description C', 0, 'usage instructions C', NOW(), NOW());

INSERT INTO `attributes` (`name`, `value`, `created_at`, `updated_at`)
VALUES
  ('Color', 'Red', NOW(), NOW()),
  ('Size', 'Large', NOW(), NOW()),
  ('Material', 'Cotton', NOW(), NOW()),
  ('Connection Type', 'Wireless', NOW(), NOW()),
  ('DPI', '1600i', NOW(), NOW()),
  ('Scroll Wheel', 'Yes', NOW(), NOW()),
 ('Operating System', 'Android', NOW(), NOW()),
  ('Screen Size', '6.2 inches', NOW(), NOW()),
  ('Camera Resolution', '12 MP', NOW(), NOW());

INSERT INTO `product_attributes` (`attribute_id`, `product_id`, `created_at`, `updated_at`)
VALUES
  (1, 1, NOW(), NOW()), 
  (2, 1, NOW(), NOW()), 
  (3, 1, NOW(), NOW()),
  (4, 2, NOW(), NOW()),
  (5, 2, NOW(), NOW()), 
  (6, 2, NOW(), NOW()), 
  (7, 3, NOW(), NOW()),
  (8, 3, NOW(), NOW()),
  (9, 3, NOW(), NOW()); 


use database_03_PhamHoang;
SELECT * FROM products;  
SELECT * FROM attributes,product_attributes WHERE attributes.id = product_attributes.attribute_id
AND product_attributes.product_id = 2;  
SELECT * FROM products WHERE stock_quantity > 0;

  

 

