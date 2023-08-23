CREATE DATABASE database_01_PhamHoang;

use database_01_PhamHoang;

CREATE TABLE
    courses (
        id int NOT NULL,
        name varchar(100) NOT NULL,
        price float,
        detail text,
        teacher_id int NOT NULL,
        active int,
        created_at timestamp,
        updated_at timestamp
    );

ALTER TABLE courses ADD description text NULL AFTER price;

ALTER TABLE courses CHANGE COLUMN detail content text NOT NULL;

CREATE TABLE
    teachers (
        id int NOT NULL,
        name varchar(100) NOT NULL,
        bio text,
        created_at timestamp,
        updated_at timestamp
    );

INSERT INTO
    teachers (id, name, bio, created_at, updated_at)
VALUES
    (1, "Nam", NULL, NOW (), NOW ()),
    (2, "Khanh", NULL, NOW (), NOW ()),
    (3, "Linh", NULL, NOW (), NOW ());

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        1,
        "Khoa 1",
        1000,
        "des khoa 1",
        "content khoa 1",
        1,
        1,
        NOW (),
        NOW ()
    ),
    (
        2,
        "Khoa 2",
        2000,
        "des khoa 2",
        "content khoa 2",
        1,
        1,
        NOW (),
        NOW ()
    ),
    (
        3,
        "Khoa 3",
        3000,
        "des khoa 3",
        "content khoa 3",
        1,
        1,
        NOW (),
        NOW ()
    ),
    (
        4,
        "Khoa 4",
        4000,
        "des khoa 4",
        "content khoa 4",
        2,
        1,
        NOW (),
        NOW ()
    ),
    (
        5,
        "Khoa 5",
        5000,
        "des khoa 5",
        "content khoa 5",
        2,
        1,
        NOW (),
        NOW ()
    ),
    (
        6,
        "Khoa 6",
        6000,
        "des khoa 6",
        "content khoa 6",
        2,
        1,
        NOW (),
        NOW ()
    ),
    (
        7,
        "Khoa 7",
        7000,
        "des khoa 7",
        "content khoa 7",
        3,
        1,
        NOW (),
        NOW ()
    ),
    (
        8,
        "Khoa 8",
        8000,
        "des khoa 8",
        "content khoa 8",
        3,
        1,
        NOW (),
        NOW ()
    ),
    (
        9,
        "Khoa 9",
        9000,
        "des khoa 9",
        "content khoa 9",
        3,
        1,
        NOW (),
        NOW ()
    );

UPDATE courses
SET
    name = "khoa 10",
    price = 10000,
    updated_at = NOW()
WHERE
    id = 1;

UPDATE courses
SET
    name = "khoa 20",
    price = 20000,
    updated_at = NOW()
WHERE
    id = 2;

UPDATE courses
SET
    name = "khoa 30",
    price = 30000,
    updated_at = NOW()
WHERE
    id = 3;

UPDATE courses
SET
    name = "khoa 40",
    price = 40000,
    updated_at = NOW()
WHERE
    id = 4;

UPDATE courses
SET
    name = "khoa 50",
    price = 50000,
    updated_at = NOW()
WHERE
    id = 5;

UPDATE courses
SET
    name = "khoa 60",
    price = 60000,
    updated_at = NOW()
WHERE
    id = 6;

UPDATE courses
SET
    name = "khoa 70",
    price = 70000,
    updated_at = NOW()
WHERE
    id = 7;

UPDATE courses
SET
    name = "khoa 80",
    price = 80000,
    updated_at = NOW()
WHERE
    id = 8;

UPDATE courses
SET
    name = "khoa 90",
    price = 90000,
    updated_at = NOW()
WHERE
    id = 9;

UPDATE teachers
SET
    bio = "SpiderMan",
    updated_at = NOW()
WHERE
    id = 2;

UPDATE teachers
SET
    bio = "Never Give Up",
    updated_at = NOW()
WHERE
    id = 3;

UPDATE teachers
SET
    bio = "Faster",
    updated_at = NOW()
WHERE
    id = 1;


use database_01_PhamHoang;
    SELECT * FROM courses;

    

    SELECT * FROM teachers;
  
    