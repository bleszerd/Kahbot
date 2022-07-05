import { model, Schema, Types } from "mongoose";
import { ICommand } from "./types";

/*
  alias: string;
  response: string;
  replaceWith: string[];
*/
const CommandSchema = new Schema(
  {
    alias: { type: String },
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
