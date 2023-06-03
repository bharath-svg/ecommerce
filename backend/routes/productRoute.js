import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} from "../controllers/productController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/productby/:id", getProductDetails);
router.post(
  "/products/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);
router.put(
  "/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);
router.delete(
  "/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);
router.put("/review", isAuthenticatedUser, createProductReview);

router.get("/reviews", getProductReviews);
router.delete("/reviews", isAuthenticatedUser, deleteReview);

export default router;
