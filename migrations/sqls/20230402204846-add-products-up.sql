-- ADD PRODUCTS UP

CREATE TABLE products
(
    id serial PRIMARY KEY,
    name text NOT NULL,
    category VARCHAR(255) NOT NULL,
    price numeric NOT NULL,
    seller_id int REFERENCES users(id)
);