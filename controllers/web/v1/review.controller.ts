import { Request, Response } from "express";
import { Review } from "../../../src/entity/Review";
import { okRes } from "../../../utility/util.service";

export default class ReviewsController {
  static async getReviews(req: Request, res: Response): Promise<object> {
    const body = req.body;
    let productReviews = await Review.findOneOrFail({
      where: { product: { id: body.id } },
    });
    return okRes(res, { productReviews });
  }
  static async addReview(req, res: Response): Promise<object> {
    const body = req.body;
    let review = await Review.create({
      active: true,
      comment: body.comment,
      product: body.product,
      user: req.user.id,
    });
    return okRes(res, { review });
  }
  //delete review from db
  static async deleteReview(req, res: Response): Promise<object> {
    const body = req.body;
    let review = await Review.findOne(body.id, { relations: ["user"] });
    if (req.user.id === review.user.id) review.remove();
    return okRes(res, { review });
  }
}
