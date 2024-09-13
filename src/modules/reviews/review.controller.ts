import { Request, Response } from "express";
import { ReviewServices } from "./review.service";

const createReview = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const reviewData = req.body;

  const result = await ReviewServices.creteReviewIntoDB(slug, reviewData);

  res.json({
    success: true,
    message: "Review is created successfully !",
    data: result,
  });
};

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviewsFromDB();

    res.status(200).json({
      success: true,
      message: "Reviews are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Reviews!",
      error: err,
    });
  }
};

const getReviewById = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const result = await ReviewServices.getReviewByIdFromDB(reviewId);

    res.status(200).json({
      success: true,
      message: "Review fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Reviews!",
      error: err,
    });
  }
};

const updateReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ReviewServices.updateReviewByIdFromDB(id);

    res.status(200).json({
      success: true,
      message: "Review updated successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update Reviews!",
      error: err,
    });
  }
};

const deleteReviewById = async (req: Request, res: Response) => {
  try {
    const { slug, reviewId } = req.params;
    const result = await ReviewServices.deleteReviewByIdFromDB(slug, reviewId);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete Reviews!",
      error: err,
    });
  }
};

export const ReviewControllers = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
