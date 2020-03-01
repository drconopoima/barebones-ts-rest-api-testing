import { Router } from "express";
import { listings } from "../database/listings";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({
    message: "Hello world!"
  });
});

router.get("/listings", (_request, response) => {
  response.json(listings);
});
