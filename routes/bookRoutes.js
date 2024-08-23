import express from 'express';
const router = express.Router();
import bookController from "../controllers/bookController.js";

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
