import * as express from "express";
import UserController from "../../controllers/web/v1/user.controller";
import HomeController from "../../controllers/web/v1/home.controller";
import PayController from "../../controllers/web/v1/payment.controller";
import otp from "../../middlewares/web/otp";
import auth from "../../middlewares/web/auth";
import ReviewsController from "../../controllers/web/v1/review.controller";

const route = express.Router();

/// Not Auth
route.post("/register", UserController.register);
route.post("/otp", otp, UserController.checkOtp);
route.post("/login", UserController.login);

route.post("/forget/password", UserController.forget);
route.post("/verify/password", UserController.verifyPassword);
route.get("/categories", HomeController.getCategories);
// sub
route.get("/subcategories/category/:id", HomeController.getSub);
// products
route.get("/products/subcategory/:id", HomeController.getProducts);
// one product
route.get("/products/:id", HomeController.getProduct);

//add review route here
route.get("/review", ReviewsController.getReviews)
route.post("/review", ReviewsController.addReview);

// checkout

//  Need Auth
route.use(auth);

route.get("/check", UserController.check);
route.post("/checkout", PayController.checkout);

export default route;
