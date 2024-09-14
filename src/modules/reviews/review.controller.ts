import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ReviewServices } from "./review.service";

const createReview = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const reviewData = req.body;

  const result = await ReviewServices.creteReviewIntoDB(slug, reviewData);

  res.json({
    success: true,
    message: "Review is created successfully !",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.getAllReviewsFromDB();

  res.status(200).json({
    success: true,
    message: "Reviews are fetched successfully !",
    data: result,
  });
});

const getReviewById = catchAsync(async (req: Request, res: Response) => {
  const { reviewId } = req.params;
  const result = await ReviewServices.getReviewByIdFromDB(reviewId);

  res.status(200).json({
    success: true,
    message: "Review fetched successfully !",
    data: result,
  });
});

const updateReviewById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewServices.updateReviewByIdFromDB(id);

  res.status(200).json({
    success: true,
    message: "Review updated successfully !",
    data: result,
  });
});

const deleteReviewById = catchAsync(async (req: Request, res: Response) => {
  const { slug, reviewId } = req.params;
  const result = await ReviewServices.deleteReviewByIdFromDB(slug, reviewId);

  res.status(200).json({
    success: true,
    message: "Review deleted successfully !",
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
