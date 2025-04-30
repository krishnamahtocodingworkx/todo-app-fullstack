const blogs = require("../models/blogs");
async function addBlog(req, res) {
  try {
    const { title, description, conclusion, author, imageUrl } = req.body;
    if (!title || !description || !conclusion || !author || !imageUrl) {
      res.status(411).json({
        msg: "You send the wrong inputs",
        success: false,
      });
      return;
    }
    const newBlog = await blogs.create({
      title: title,
      description: description,
      conclusion: conclusion,
      imageUrl: imageUrl,
      author: author,
    });
    if (!newBlog) {
      return res.status(500).json({
        message: "Blog creation failed, Please try again",
        success: false,
      });
    }
    return res.json({
      message: "Blog created successful",
      data: newBlog,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
    });
  }
}
async function getAllBlogs(req, res) {
  try {
    const blogsData = await blogs.find().limit(5).sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Blogs are fetched successful",
      success: true,
      data: blogsData,
    });
  } catch (error) {
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
    });
  }
}
async function blogDetails(req, res) {
  try {
    const { blogId } = req.params;
    console.log("blog Id :::::::::", blogId);
    if (!blogId) {
      return res.status(404).json({
        message: "Blog id is required",
        success: false,
      });
    }
    const blogData = await blogs.findById(blogId);
    if (!blogData) {
      return res.status(400).json({
        message: "Blog not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Blog fetched successfully",
      data: blogData,
    });
  } catch (error) {
    return res.status(500).json({
      message: ExceptionMessage.SOMETHING_WENT_WRONG,
      success: false,
    });
  }
}
module.exports = { addBlog, getAllBlogs, blogDetails };
