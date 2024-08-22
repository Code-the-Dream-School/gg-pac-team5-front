import { factory, primaryKey, oneOf, manyOf } from "@mswjs/data";
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
    description: () => faker.lorem.sentences(),
    services: () => manyOf("service"),
  },
  service: {
    id: primaryKey(faker.string.uuid),
    vendorId: String, // Simulate foreign key from vendor model
    name: () => faker.commerce.productName(),
    image: () => faker.image.urlLoremFlickr({ category: 'food' }),
    description: () => faker.commerce.productDescription(),
    price: faker.commerce.price
  }
});

// Add auto-generated CRUD api for /vendors
handlers.push(...db.vendor.toHandlers("rest", MOCK_API));

// Add api to retrieve vendor by name
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

    if (!response) {
      return HttpResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return HttpResponse.json(response);
  })
);

// Add auto-generated CRUD api for /services
handlers.push(...db.service.toHandlers("rest", MOCK_API));

// Seed vendor database
for (let i = 0; i < 10; i++) {
  db.vendor.create();
}

// Seed service database
const vendors = db.vendor.getAll();
for (let i = 0; i < 10; i++) {
  let services = [];
  for (let j = 0; j < Math.round(Math.random() * 3); j++) {
    services.push(db.service.create({ vendorId: vendors[i].id }));
  }

  db.vendor.update({
    where: {
      id: {
        equals: vendors[i].id
      }
    },
    data: {
      services: services
    }
  })
}

console.log(db.vendor.getAll());
console.log(db.service.getAll());

export default handlers;
