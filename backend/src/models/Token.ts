import mongoose from "mongoose";

export interface IToken extends mongoose.Document {
  name: string;
  description: string;
  image: string | null;
  owner: mongoose.Types.ObjectId;
  location: {
    name: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  metadata: {
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
}

const tokenSchema = new mongoose.Schema<IToken>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      name: {
        type: String,
        required: true,
      },
      coordinates: {
        latitude: {
          type: Number,
          required: true,
        },
        longitude: {
          type: Number,
          required: true,
        },
      },
    },
    metadata: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
tokenSchema.index({ owner: 1 });
tokenSchema.index({ "location.coordinates": "2dsphere" });

export const Token = mongoose.model<IToken>("Token", tokenSchema);
