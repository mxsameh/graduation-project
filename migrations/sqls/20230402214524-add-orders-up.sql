-- ADD ORDERS UP

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    date varchar(100) NOT NULL,
    time varchar(100) NOT NULL,
    shipping numeric NOT NULL,
    subtotal numeric NOT NULL,
    total numeric NOT NULL,
    payment varchar(100) NOT NULL,
    seller_id int REFERENCES users(id) ON DELETE CASCADE
    buyer_id int REFERENCES users(id) ON DELETE CASCADE
);