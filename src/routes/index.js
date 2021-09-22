const {Router} = require("express");
const router = Router();

const {getCustomers,createCustomer,getCustomerById,deleteCustomer,updateCustomer,
    getProduct,createProduct,getProductById,deleteProduct,updateProduct} = require("../controllers/index.controller")

router.get("/customers", getCustomers )
router.get("/customers/:id", getCustomerById)
router.post("/customers", createCustomer)
router.delete("/customers/:id", deleteCustomer)
router.put("/customer/:id", updateCustomer)

router.get("/product", getProduct )
router.get("/product/:id", getProductById)
router.post("/product", createProduct)
router.delete("/product/:id", deleteProduct)
router.put("/product/:id", updateProduct)




module.exports = router;



