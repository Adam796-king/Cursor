-- queries.sql
-- Eksempler på vanlige spørringer mot databasen

-- 1) Legge inn noen standard-produkter
INSERT INTO products (name, price, description, image_url) VALUES
('Brytesko', 119900, 'Lette sko for godt grep på matta.', 'https://via.placeholder.com/400x250?text=Brytesko'),
('Rød singlet', 79900, 'Standard rød brytedrakt.', 'https://via.placeholder.com/400x250?text=Singlet'),
('Hodebeskyttelse', 59900, 'Enkel beskyttelse for hode/ører.', 'https://via.placeholder.com/400x250?text=Hodebeskyttelse');

-- 2) Registrere en kunde
INSERT INTO customers (name, email)
VALUES ('Ola Nordmann', 'ola@example.com');

-- 3) Lage en ny ordre for kunden
INSERT INTO orders (customer_id)
VALUES (1); -- antar at kunden over fikk id = 1

-- 4) Legge produkter inn i ordren
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES
  (1, 1, 1, 119900), -- 1 par brytesko
  (1, 2, 1, 79900);  -- 1 singlet

-- 5) Hente ut alle produkter
SELECT * FROM products;

-- 6) Hente alle ordre med tilhørende kunde
SELECT
  o.id AS order_id,
  o.created_at,
  c.name AS customer_name,
  c.email
FROM orders o
JOIN customers c ON o.customer_id = c.id;

-- 7) Hente alle ordrelinjer for én ordre
SELECT
  oi.order_id,
  p.name,
  oi.quantity,
  oi.unit_price
FROM order_items oi
JOIN products p ON oi.product_id = p.id
WHERE oi.order_id = 1;


