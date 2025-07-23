-- create tables
CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE restaurant (
    res_id INT PRIMARY KEY AUTO_INCREMENT,
    res_name VARCHAR(255),
    image VARCHAR(255),
    descr VARCHAR(255)
);

CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE food_type (
    type_id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(255)
);

CREATE TABLE food (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(255),
    image VARCHAR(255),
    price FLOAT,
    descr VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE sub_food (
    sub_id INT PRIMARY KEY AUTO_INCREMENT,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE `order` (
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

--- insert data
-- Users
INSERT INTO user (user_id, full_name, email, password) VALUES
(1, 'Alice Smith', 'alice@example.com', 'pass123'),
(2, 'Bob Johnson', 'bob@example.com', 'pass123'),
(3, 'Carol Lee', 'carol@example.com', 'pass123'),
(4, 'David Kim', 'david@example.com', 'pass123'),
(5, 'Eva Brown', 'eva@example.com', 'pass123'),
(6, 'Frank Wright', 'frank@example.com', 'pass123'),
(7, 'Grace Hall', 'grace@example.com', 'pass123'),
(8, 'Henry Young', 'henry@example.com', 'pass123'),
(9, 'Isla King', 'isla@example.com', 'pass123'),     -- Inactive
(10, 'Jack Green', 'jack@example.com', 'pass123');   -- Inactive

-- Restaurants
INSERT INTO restaurant (res_id, res_name, image, descr) VALUES
(1, 'Pasta Palace', 'pasta.jpg', 'Italian dishes and pastas'),
(2, 'Burger Barn', 'burger.jpg', 'Best burgers in town'),
(3, 'Sushi Spot', 'sushi.jpg', 'Fresh sushi and rolls'),
(4, 'Taco Tower', 'taco.jpg', 'Mexican food and tacos');

-- Food Types
INSERT INTO food_type (type_id, type_name) VALUES
(1, 'Italian'),
(2, 'American'),
(3, 'Japanese'),
(4, 'Mexican');

-- Foods
INSERT INTO food (food_id, food_name, image, price, descr, type_id) VALUES
(1, 'Spaghetti Carbonara', 'carbonara.jpg', 12.99, 'Classic Italian pasta', 1),
(2, 'Cheeseburger', 'cheeseburger.jpg', 9.49, 'Beef patty with cheese', 2),
(3, 'Salmon Sushi', 'sushi.jpg', 15.00, 'Fresh salmon sushi', 3),
(4, 'Beef Taco', 'taco.jpg', 7.25, 'Mexican-style beef taco', 4),
(5, 'Margherita Pizza', 'pizza.jpg', 11.50, 'Simple pizza with tomato and cheese', 1);


-- Sub Foods
INSERT INTO sub_food (sub_id, sub_name, sub_price, food_id) VALUES
(1, 'Extra Cheese', 1.50, 1),
(2, 'Avocado Topping', 2.00, 4),
(3, 'Double Patty', 3.00, 2),
(4, 'Soy Sauce Pack', 0.50, 3),
(5, 'Olives', 1.00, 5);


-- Likes (users 1–8)
INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2025-07-01'), (1, 2, '2025-07-01'),
(2, 1, '2025-07-02'), (2, 3, '2025-07-02'),
(3, 2, '2025-07-03'), (3, 4, '2025-07-03'),
(4, 1, '2025-07-04'), (4, 4, '2025-07-04'),
(5, 3, '2025-07-05'),
(6, 2, '2025-07-06'), (6, 3, '2025-07-06'),
(7, 1, '2025-07-07'),
(8, 4, '2025-07-08');

-- Ratings (users 1–8)
INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, '2025-07-01'),
(2, 3, 4, '2025-07-02'),
(3, 2, 3, '2025-07-03'),
(4, 1, 5, '2025-07-04'),
(5, 3, 4, '2025-07-05'),
(6, 2, 2, '2025-07-06'),
(7, 1, 5, '2025-07-07'),
(8, 4, 4, '2025-07-08');

-- Orders (users 1–8 only; each has 3 to 6 orders)
INSERT INTO `order` (user_id, food_id, amount, code, arr_sub_id) VALUES
-- User 1
(1, 1, 2, 'ORD1001', '1'),
(1, 2, 1, 'ORD1002', '3'),
(1, 5, 1, 'ORD1003', '5'),

-- User 2
(2, 3, 1, 'ORD1004', '4'),
(2, 4, 3, 'ORD1005', '2'),
(2, 2, 2, 'ORD1006', '3'),

-- User 3
(3, 5, 2, 'ORD1007', '5'),
(3, 1, 1, 'ORD1008', '1'),
(3, 4, 2, 'ORD1009', '2'),

-- User 4
(4, 2, 1, 'ORD1010', '3'),
(4, 3, 2, 'ORD1011', '4'),
(4, 1, 1, 'ORD1012', '1'),
(4, 5, 1, 'ORD1013', '5'),

-- User 5
(5, 4, 1, 'ORD1014', '2'),
(5, 3, 1, 'ORD1015', '4'),
(5, 1, 2, 'ORD1016', '1'),

-- User 6
(6, 2, 3, 'ORD1017', '3'),
(6, 5, 1, 'ORD1018', '5'),
(6, 3, 2, 'ORD1019', '4'),

-- User 7
(7, 1, 1, 'ORD1020', '1'),
(7, 2, 1, 'ORD1021', '3'),
(7, 4, 1, 'ORD1022', '2'),

-- User 8
(8, 5, 2, 'ORD1023', '5'),
(8, 3, 1, 'ORD1024', '4'),
(8, 2, 2, 'ORD1025', '3');


-- Bai tap
-- Tìm 5 người đã like nhà hàng nhiều nhất.
SELECT 
	`like_res`.user_id, 
	`user`.`user_id`, 
	`user`.full_name, 
	COUNT(`user`.`user_id`) as count_like
FROM `like_res`
INNER JOIN `user` ON (`like_res`.`user_id`) = (`user`.`user_id`)
GROUP BY `user`.user_id
ORDER BY count_like DESC
LIMIT 5


-- Tìm 2 nhà hàng có lượt like nhiều nhất.
SELECT 
	`like_res`.res_id, 
	`restaurant`.res_id, 
	`restaurant`.res_name, 
	COUNT(`like_res`.res_id) as count_like
FROM `like_res`
INNER JOIN `restaurant` ON `like_res`.res_id = `restaurant`.res_id
GROUP BY `like_res`.res_id
ORDER BY count_like DESC
LIMIT 2

-- Tìm người đã đặt hàng nhiều nhất.
SELECT 
	`order`.user_id, 
	`user`.user_id, 
	`user`.full_name, 
	COUNT(`order`.user_id) AS NumOrd
FROM `order`
INNER JOIN `user` ON (`order`.user_id) = (`user`.user_id)
GROUP BY `order`.user_id
ORDER BY NumOrd DESC
LIMIT 1;

-- Tìm người dùng không hoạt động trong hệ thống
--(không đặt hàng, không like, không đánh giá nhà
--hàng).
SELECT 
	COUNT(`order`.user_id), 
	`user`.full_name, 
	COUNT(`rate_res`.user_id), 
	COUNT(`rate_res`.amount), 
	(`like_res`.res_id
FROM `order`
RIGHT JOIN `user` ON (`order`.user_id) = (`user`.user_id)
LEFT JOIN `rate_res` ON (`rate_res`.user_id) = (`user`.user_id)
LEFT JOIN `like_res` ON (`like_res`.user_id) = (`user`.user_id)
GROUP BY `user`.user_id
---Query 1: Expression #5 of SELECT list is not in GROUP BY 
---clause and contains nonaggregated column 'baitap.rate_res.amount'
--- which is not functionally dependent on columns in GROUP BY clause; 
--- this is incompatible with sql_mode=only_full_group_by


--- Fix
--- add count for nonaggregated columns rate_res.amount, like_res.res_id, 
SELECT 
    `user`.user_id,
    `user`.full_name,
    COUNT(`order`.user_id) AS order_num,
    COUNT(`rate_res`.amount) AS rated_amount,
    COUNT(`like_res`.res_id) AS liked_res_num
FROM `user`
LEFT JOIN `order` ON `order`.user_id = `user`.user_id
LEFT JOIN `rate_res` ON `rate_res`.user_id = `user`.user_id
LEFT JOIN `like_res` ON `like_res`.user_id = `user`.user_id
GROUP BY `user`.user_id, `user`.full_name
ORDER BY order_num, rated_amount, liked_res_num ASC
LIMIT 2