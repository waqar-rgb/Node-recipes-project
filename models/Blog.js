const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true, // Make the 'title' field required
      },
      body: String,
      image: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Blog", blogSchema);
