import { Blog } from "../model/Blog.js";
import { Favorite } from "../model/Blog.js";
export const getAllBlogs = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const blog = await Blog.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: blog,
      message: "Nice",
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById({ _id: id });
    res.status(200).send({
      data: blog,
      message: "Nice",
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const addStars = async (req, res) => {
  try {
    const { id } = req.params;
    const { star } = req.body;
    const blog = await Blog.findById(id);
    await Blog.findByIdAndUpdate(
      { _id: id },
      {
        user: blog.user + 1,
        stars: Number(blog.stars) + Number(star),
      }
    );
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const addFavorite = async (req, res) => {
  try {
    const blog = await Favorite.create(req.body);
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
// export const approveBlog = async (req, res) => {
//   try {
//     const { _id, blog_id } = req.body;
//     const approve = await Approve.findById({ _id: _id });
//     await Blog.findByIdAndUpdate(
//       { _id: blog_id },
//       {
//         status: "Public",
//       }
//     );
//     await Approve.findByIdAndDelete({ _id: _id });
//     res.status(200).send({
//       data: approve,
//       message: "Approved",
//     });
//   } catch (error) {
//     res.status(400).send({
//       message: error.message,
//     });
//   }
// };
export const getBlogByParentCate = async (req, res) => {
  try {
    const { parentCategory } = req.body;
    const blog = await Blog.find({
      parentCategory: parentCategory,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogByCategory = async (req, res) => {
  try {
    const { parentCategory, category } = req.body;
    const blog = await Blog.find({
      category: category,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogBySecondCate = async (req, res) => {
  try {
    const { parentCategory, secondCategory, category } = req.body;
    const blog = await Blog.find({
      secondCategory: secondCategory,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
