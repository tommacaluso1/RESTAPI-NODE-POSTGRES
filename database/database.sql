CREATE DATABASE firstapi;

CREATE TABLE PRODUCT
(
  ProductID SERIAL,
  ProductPrice INT NOT NULL,
  ProductName VARCHAR(40),
  PRIMARY KEY (ProductID)
);

CREATE TABLE CUSTOMERS
( 
    CustomerID SERIAL PRIMARY KEY,
    CustomerName VARCHAR(40),
    CustomerEmail TEXT
);

CREATE TABLE SALE_TRANSACTION
(
  SaleID SERIAL,
  CustomerID INT NOT NULL,
  PRIMARY KEY (SaleID),
  FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);

CREATE TABLE SOLD
(
  ProductID SERIAL,
  SaleID INT NOT NULL,
  PRIMARY KEY (ProductID, SaleID),
  FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID),
  FOREIGN KEY (SaleID) REFERENCES SALE_TRANSACTION(SaleID)
);

INSERT INTO customers (CustomerName, CustomerEmail) VALUES
    ('lqtjd', 'lqtjd@hotmail.com'),
    ('guido', 'guidol2000@hotmail.com');
   

INSERT INTO PRODUCT (ProductName, ProductPrice) VALUES
    ('Tshirt', 10),
    ('Pants', 15);
   