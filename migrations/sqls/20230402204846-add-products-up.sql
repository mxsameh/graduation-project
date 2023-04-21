-- ADD PRODUCTS UP
CREATE TABLE products (
    id serial PRIMARY KEY,
    name text NOT NULL,
    images text,
    category VARCHAR(255) NOT NULL,
    price numeric NOT NULL,
    seller_id int REFERENCES users(id),
    reviews_number smallint,
    reviews_stars decimal,
    details text,
    description text,
    information text
);