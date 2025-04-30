import type { Request, Response, NextFunction } from "express";
import type { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { AppError } from "../middleware/errorHandler";

export class UserController {
  // Generate JWT token
  private generateToken(userId: string): string {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });
  }

  // Register new user
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        throw new AppError("User already exists", 400);
      }

      // Create new user
      const user = await User.create({
        username,
        email,
        password,
      });

      // Generate token
      const token = this.generateToken(user._id);

      res.status(201).json({
        status: "success",
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
          token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Login user
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email }).select("+password");

      if (!user || !(await user.comparePassword(password))) {
        throw new AppError("Invalid credentials", 401);
      }

      // Generate token
      const token = this.generateToken(user._id);

      res.status(200).json({
        status: "success",
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
          token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get user profile
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findById(req.user._id);

      if (!user) {
        throw new AppError("User not found", 404);
      }

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update user profile
  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, bio } = req.body;

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { username, bio },
        { new: true, runValidators: true }
      );

      if (!user) {
        throw new AppError("User not found", 404);
      }

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update user avatar
  async updateAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        throw new AppError("Please upload an image", 400);
      }

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { avatar: req.file.path },
        { new: true }
      );

      if (!user) {
        throw new AppError("User not found", 404);
      }

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get user profile by username
  async getUserProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findOne({ username: req.params.username });

      if (!user) {
        throw new AppError("User not found", 404);
      }

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Follow user
  async followUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userToFollow = await User.findById(req.params.id);

      if (!userToFollow) {
        throw new AppError("User not found", 404);
      }

      if (req.user._id.equals(userToFollow._id)) {
        throw new AppError("You cannot follow yourself", 400);
      }

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $addToSet: { following: userToFollow._id } },
        { new: true }
      );

      await User.findByIdAndUpdate(userToFollow._id, {
        $addToSet: { followers: req.user._id },
      });

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Unfollow user
  async unfollowUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userToUnfollow = await User.findById(req.params.id);

      if (!userToUnfollow) {
        throw new AppError("User not found", 404);
      }

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { following: userToUnfollow._id } },
        { new: true }
      );

      await User.findByIdAndUpdate(userToUnfollow._id, {
        $pull: { followers: req.user._id },
      });

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
