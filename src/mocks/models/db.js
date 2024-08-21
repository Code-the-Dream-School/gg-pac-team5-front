import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
import { MOCK_API } from "../../config";

const handlers = [];

faker.seed(0);

const db = factory({
  vendor: {
    id: primaryKey(faker.string.uuid),
    name: faker.company.name,
    profileImage: () => faker.image.urlLoremFlickr({ category: 'business' }),
    backgroundImage: () => faker.image.url(),
    summary: faker.company.catchPhrase,
    description: () => faker.lorem.sentences()
  },
});

// Add auto-generated CRUD api for /vendors
handlers.push(...db.vendor.toHandlers("rest", MOCK_API));

// Intercept http request
handlers.push(
  http.get(`${MOCK_API}/vendors/name/:name`, ({ params }) => {
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
