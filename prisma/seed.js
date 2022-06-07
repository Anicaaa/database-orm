const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createdContact = await prisma.contact.create({
    data: {
      customerId: 1,
      phone: "0765",
      email: "anica@test.com",
    },
  });

  console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Om Shanti Om",
      runtimeMins: 120,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      movieId: 1,
      startsAt: "1997-07-16T19:20:30.451Z",
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
