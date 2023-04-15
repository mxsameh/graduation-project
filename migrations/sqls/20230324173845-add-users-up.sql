-- ADD USERS UP --

CREATE TABLE users
(
    id serial NOT NULL PRIMARY KEY,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    name varchar(100) NOT NULL,
    phone bigint,
    type text NOT NULL

);