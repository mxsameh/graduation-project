-- ADD ORDERS UP

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    date varchar(100) NOT NULL,
    time varchar(100) NOT NULL,
    shipping numeric NOT NULL,
    subtotal numeric NOT NULL,
    taxes numeric NOT NULL,
    total numeric NOT NULL,
    payment varchar(100) NOT NULL,
    status varchar(100),
    country varchar(200),
    city varchar(200),
    address TEXT,
    zip_code int,
    seller_id int REFERENCES users(id) ON DELETE CASCADE,
    buyer_id int REFERENCES users(id) ON DELETE CASCADE,
    delivery_id int REFERENCES users(id) ON DELETE CASCADE
);