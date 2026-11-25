import app from "./app";
import config from "./app/config";
import { prisma } from "./app/lib/prisma";
import { doctorSeed, adminSeed, superAdminSeed } from "./app/utils/seed";

const PORT = config.port;

const main = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
    await superAdminSeed();
    await adminSeed();
    await doctorSeed();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
