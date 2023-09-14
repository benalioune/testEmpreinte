
import mongoose from "mongoose";

// write model books moogoose schema
const BookSchema = new mongoose.Schema({
    title: { type: String, require: true },
    author: { type: mongoose.Types.ObjectId, ref: 'Author', required: [true, '{PATH} is Required'] },
});
const Book = mongoose.model('Book', BookSchema);
export default Book;
