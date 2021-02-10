drop database if exists burgers_db;

CREATE database burgers_db;

use burgers_db;

create TABLE burgers (

    id int auto_increment PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured boolean
);

