// import { http } from "msw";
import db from "./models/db";

export const handlers = [
  // // Intercept the "GET /resource" request.
  // http.get("http://localhost:8000/api/v1/resources", () => {
  //   // And respond with a "text/plain" response
  //   // with a "Hello world!" text response body.
  //   return new Response("Hello world!");
  // }),
  ...db.vendor.toHandlers("rest", "http://localhost:8000/api/v1"),
];
