import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import Admin from "@repo/db/admin";
import { SECRET } from "@repo/secret/secret";
import dbConnect from "@repo/secret/db";

export default async function handler(
  res: NextApiResponse,
  req: NextApiRequest,
) {
  await dbConnect();
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username, password });

  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged In sucessfully", token: token });
  } else {
    res.status(403).json({ message: "Invalid Username or Password" });
  }
}
