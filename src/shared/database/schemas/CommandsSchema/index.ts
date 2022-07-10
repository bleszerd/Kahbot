import { model, Schema, Types } from "mongoose";
import { ICommand } from "./types";

const CommandReplacesSchema = new Schema(
  {
    symbol: { type: String },
    with: { type: String },
  },
  {
    timestamps: false,
    _id: false,
  }
);

const CommandSchema = new Schema(
  {
    alias: { type: String, unique: true },
    response: { type: String },
    active: { type: Boolean, default: true },
    replaces: {
      type: [CommandReplacesSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommandModel = model<ICommand>("command", CommandSchema);
