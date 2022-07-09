import { model, Schema, Types } from "mongoose";
import { ICommand } from "./types";

const CommandSchema = new Schema(
  {
    alias: { type: String, unique: true },
    response: { type: String },
    replaces: {
      type: [
        {
          symbol: { type: String },
          with: { type: String },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommandModel = model<ICommand>("command", CommandSchema);
