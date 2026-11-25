import bcrypt from "bcryptjs";
import { Role } from "../../../prisma/generated/prisma/enums";
import config from "../config";
import { prisma } from "../lib/prisma";

export const superAdminSeed = async () => {
  try {
    const isSuperAdminExist = await prisma.user.findFirst({
      where: {
        role: Role.SUPER_ADMIN,
      },
    });

    if (isSuperAdminExist) {
      console.log("Super Admin already exist !!!");
      return;
    }

    const name = config.super_admin_name;
    const email = config.super_admin_email;
    const password = config.super_admin_password;

    if (!name || !email || !password) {
      console.log("Super Admin credentials are not provided in the .env file.");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const superAdmin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.SUPER_ADMIN,
        emailVerified: true,
      },
    });
  } catch (error) {
    console.error("Error seeding Super Admin:", error);
    await prisma.user.delete({
      where: {
        email: config.super_admin_email!,
      },
    });
  }
};

// admin create seed

export const adminSeed = async () => {
  try {
    const isAdminExist = await prisma.user.findFirst({
      where: {
        role: Role.ADMIN,
      },
    });

    if (isAdminExist) {
      console.log("Admin already exist !!!");
      return;
    }

    const name = config.admin_name;
    const email = config.admin_email;
    const password = config.admin_password;
    if (!name || !email || !password) {
      console.log("Admin credentials are not provided in the .env file.");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const admin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.ADMIN,
        emailVerified: true,
      },
    });
  } catch (error) {
    console.error("Error seeding Admin:", error);
    await prisma.user.delete({
      where: {
        email: config.admin_email!,
      },
    });
  }
};

// tester doctor create seed
export const doctorSeed = async () => {
  try {
    const isDoctorExist = await prisma.user.findFirst({
      where: {
        role: Role.DOCTOR,
      },
    });

    if (isDoctorExist) {
      console.log("Doctor already exist !!!");
      return;
    }
    const name = config.doctor_name;
    const email = config.doctor_email;
    const password = config.doctor_password;

    if (!name || !email || !password) {
      console.log("Doctor credentials are not provided in the .env file.");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(config.bcrypt_salt_rounds),
    );

    const doctor = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.DOCTOR,
        emailVerified: true,
      },
    });
  } catch (error) {
    console.error("Error seeding Doctor:", error);
    await prisma.user.delete({
      where: {
        email: config.doctor_email!,
      },
    });
  }
};
