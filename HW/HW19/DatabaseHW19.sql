--CREATE DATABASE database_02_PhamHoang;
use database_02_PhamHoang;

-- Khach hang
CREATE TABLE
    customers (
        id INT PRIMARY KEY,
        name varchar(50) NOT NULL,
        email varchar(50) NOT NULL,
        phone varchar(50)
    );

-- San pham
CREATE TABLE
    products (name varchar(50), id INT PRIMARY KEY, price FLOAT);

-- Chi tiet don hang
CREATE TABLE
    orders (
        id INT PRIMARY KEY,
        customer_id INT,
        price FLOAT,
        status varchar(50),
        create_at timestamp,
        updated_at timestamp,
        FOREIGN KEY (customer_id) REFERENCES customers (id)
    );

CREATE TABLE
    products_list (
        order_id INT,
        product_id INT,
        quantity FLOAT,
        price FLOAT,
        FOREIGN KEY (order_id) REFERENCES orders (id)
    );

-- Danh sach don hang
CREATE TABLE
    order_list (
        customer_id INT,
        order_id INT,
        total_quantity FLOAT,
        total_price FLOAT,
        status varchar(50),
        create_at timestamp,
        FOREIGN KEY (customer_id) REFERENCES customers (id),
        FOREIGN KEY (order_id) REFERENCES orders (id)
    );