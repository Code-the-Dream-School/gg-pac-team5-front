import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

const baseUrl = "http://localhost:8000/api/v1";
const handlers = [];

faker.seed(0);

const db = factory({
  vendor: {
    id: primaryKey(faker.string.uuid),
    name: faker.company.name,
  },
});

// Add auto-generated CRUD api for /vendors
handlers.push(...db.vendor.toHandlers("rest", baseUrl));

// Intercept http request
handlers.push(
  http.get(`${baseUrl}/vendors/name/:name`, ({ params }) => {
    const { name } = params;
    const response = db.vendor.findFirst({
      where: {
        name: {
          equals: name,
        },
      },
    });

    // Handle
    if (!response) {
      return HttpResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return HttpResponse.json(response);
  })
);

// Seed vendor database
for (let i = 0; i < 100; i++) {
  db.vendor.create();
}

console.log(db.vendor.getAll());

export default handlers;
