import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

faker.seed(0);

const db = factory({
  vendor: {
    id: primaryKey(faker.string.uuid),
    name: faker.company.name,
  },
});

// Seed database
for (let i = 0; i < 100; i++) {
  db.vendor.create();
}

console.log(db.vendor.getAll());

export default db;
