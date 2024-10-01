import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT--${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MOGO DB CONNECTION FAILED !!!", err);
  });
