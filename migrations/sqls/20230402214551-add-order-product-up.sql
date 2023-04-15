-- ADD ORDER_PRODUCT TABLE

CREATE TABLE order_products(
    order_id int REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    product_id int REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity int NOT NULL,
    PRIMARY KEY(order_id, product_id)
);