#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER docker;
  CREATE DATABASE docker;
  GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

  CREATE TABLE seller (
    user_id VARCHAR(100),
    name VARCHAR(100),
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    password VARCHAR(100),
    referral_code VARCHAR(100)
  );

  CREATE TABLE seller_link (
    owner_link VARCHAR(100),
    user_id VARCHAR(100),
    product_name VARCHAR(100),
    is_deleted VARCHAR(100),
    link VARCHAR(255),
    created_date DATE
  );
EOSQL
