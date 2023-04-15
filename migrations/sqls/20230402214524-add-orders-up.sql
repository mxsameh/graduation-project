-- ADD ORDERS UP

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    total numeric NOT NULL,
    buyer_id int REFERENCES users(id) ON DELETE CASCADE
);