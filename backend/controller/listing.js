const User = require("../models/user");
async function getAllUsers(req, res) {
  try {
    let { pageNo, limit, search, sortBy, sortOrder, filters } = req.query;
    pageNo = parseInt(pageNo) || 1;
    limit = parseInt(limit) || 5;
    sortOrder = parseInt(sortOrder) || 1;

    console.log("pageno :", pageNo, "limit :", limit);
    if (pageNo < 1 || limit < 1) {
      return res.status(404).json({
        message: "PageNo & limit should be at least 1",
        success: false,
      });
    } else if (sortOrder && sortOrder !== 1 && sortOrder !== -1) {
      return res.status(404).json({
        message: "sortOrder should be either 1 or -1",
        success: false,
      });
    }

    let searchQuery = {};
    if (search) {
      searchQuery = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      };
    }

    let filterQuery = {};
    if (filters) {
      filterQuery = filters;
    }

    let sortQuery = {};
    if (sortBy) {
      sortQuery[sortBy] = sortOrder;
    } else sortQuery = { createdAt: -1 };

    const query = { ...searchQuery, ...filterQuery };

    console.log("query :", query);
    console.log("sort query :", sortQuery);
    console.log("limit :", limit);
    console.log("pageno :", pageNo);
    const skip = (pageNo - 1) * limit;
    const users = await User.find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(limit);
    const totalUsers = await User.countDocuments(users);

    // console.log("users :", users);
    return res.status(200).json({
      message: "Users fetched successful",
      success: true,
      users,
      pagination: {
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: pageNo,
        pageSize: users.length,
        totalUsers,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching todos", error: error.message });
  }
}
module.exports = { getAllUsers };
