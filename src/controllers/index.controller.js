const {Pool} = require("pg");

const pool = new Pool ({
    host: "localhost",
    user: "postgres",
    password: "1337",
    database: "firstapi",
    port: "5432"
    
});

const getCustomers = async (req, res) => {
  const response = await pool.query("SELECT * FROM CUSTOMERS");
  console.log(response.rows);
  res.status(200).json(response.rows)
}

const getProduct = async (req, res) => {
    const response = await pool.query("SELECT * FROM PRODUCT");
    console.log(response.rows);
    res.status(200).json(response.rows)
  }

const getCustomerById = async (req, res) => {
    const response = await pool.query('SELECT * FROM CUSTOMERS WHERE CustomerID = $1', [req.params.CustomerID])
    res.json(response.rows);
    
}

const getProductById = async (req, res) => {
    const response = await pool.query('SELECT * FROM CUSTOMERS WHERE ProductID = $1', [req.params.ProductID])
    res.json(response.rows);
    
}



const updateCustomer = async (req, res) => {
    const id = req.params.CustomerID;
    const {CustomerName, CustomerEmail} = req.body;
    const response = await pool.query('UPDATE CUSTOMERS SET CustomerName = $1, CustomerEmail = $2 WHERE CustomerID = $3', [
        CustomerName,
        CustomerEmail,
        CustomerID
    ]);
    res.json('Customer updated Succesfully')

}

const updateProduct = async (req, res) => {
    const id = req.params.ProductID;
    const {ProductName, ProductPrice} = req.body;
    const response = await pool.query('UPDATE PRODUCT SET ProductName = $1, ProductPrice = $2 WHERE ProductID = $3', [
        ProductName,
        ProductPrice,
        ProductID
    ]);
    res.json('Product updated Succesfully')

}



const createCustomer = async (req, res) => {
    const {CustomerName, CustomerEmail} = req.body;
    const response = await pool.query('INSERT INTO CUSTOMERS (CustomerName, CustomerEmail) VALUES ($1, $2)', [CustomerName, CustomerEmail]);
    console.log(response);
    res.json({
        message: "Customer created succesfully", 
        body:{
            CUSTOMERS: {CustomerName, CustomerEmail}
        }
    })
}

const createProduct = async (req, res) => {
    const {ProductName, ProductPrice} = req.body;
    const response = await pool.query('INSERT INTO PRODUCT (ProductName, ProductPrice) VALUES ($1, $2)', [ProductName, ProductPrice]);
    console.log(response);
    res.json({
        message: "Product created succesfully", 
        body:{
            PRODUCT: {ProductName, ProductPrice}
        }
    })
}


const deleteCustomer = async (req,res) => {
    const response = await pool.query('DELETE FROM CUSTOMERS WHERE CustomerID = $1', [req.params.CustomerID])
    console.log(response)
    res.json(`User ${CustomerID} deleted succesfully`)

}

const deleteProduct = async (req,res) => {
    const response = await pool.query('DELETE FROM PRODUCT WHERE ProductID = $1', [req.params.ProductID])
    console.log(response)
    res.json(`Product ${ProductID} deleted succesfully`)

}
  

module.exports = {
    getCustomers,
    createCustomer,
    getCustomerById,
    deleteCustomer,
    updateCustomer,
    getProduct,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct

}