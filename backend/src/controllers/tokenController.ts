import { Request, Response, NextFunction } from "express";
import { Token } from "../models/Token";
import { AppError } from "../middleware/errorHandler";

export class TokenController {
  // Create a new token
  async createToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description, location } = req.body;

      const token = await Token.create({
        name,
        description,
        image: req.file ? req.file.path : null,
        owner: req.user._id,
        location: {
          name: location.name,
          coordinates: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
        },
        metadata: req.body.metadata || {},
      });

      res.status(201).json({
        status: "success",
        data: {
          token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all tokens
  async getTokens(req: Request, res: Response, next: NextFunction) {
    try {
      const tokens = await Token.find().populate("owner", "username");

      res.status(200).json({
        status: "success",
        data: {
          tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get user's tokens
  async getMyTokens(req: Request, res: Response, next: NextFunction) {
    try {
      const tokens = await Token.find({ owner: req.user._id });

      res.status(200).json({
        status: "success",
        data: {
          tokens,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single token
  async getToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await Token.findById(req.params.id).populate(
        "owner",
        "username"
      );

      if (!token) {
        throw new AppError("Token not found", 404);
      }

      res.status(200).json({
        status: "success",
        data: {
          token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update token
  async updateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await Token.findById(req.params.id);

      if (!token) {
        throw new AppError("Token not found", 404);
      }

      if (!token.owner.equals(req.user._id)) {
        throw new AppError("Not authorized to update this token", 403);
      }

      const updates = {
        name: req.body.name,
        description: req.body.description,
        image: req.file ? req.file.path : token.image,
        location: req.body.location
          ? {
              name: req.body.location.name,
              coordinates: {
                latitude: req.body.location.latitude,
                longitude: req.body.location.longitude,
              },
            }
          : token.location,
        metadata: req.body.metadata || token.metadata,
      };

      const updatedToken = await Token.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true, runValidators: true }
      );

      res.status(200).json({
        status: "success",
        data: {
          token: updatedToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete token
  async deleteToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await Token.findById(req.params.id);

      if (!token) {
        throw new AppError("Token not found", 404);
      }

      if (!token.owner.equals(req.user._id)) {
        throw new AppError("Not authorized to delete this token", 403);
      }

      await token.deleteOne();

      res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
}
