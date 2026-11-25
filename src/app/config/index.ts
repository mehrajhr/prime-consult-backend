import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  frontend_url: process.env.APP_URL,
  bcrypt_salt_rounds: process.env.SALT_ROUNDS!,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRESIN!,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRESIN!,
  node_env: process.env.NODE_ENV,
  google_client_id: process.env.GOOGLE_CLIENT_ID!,
  super_admin_name: process.env.SUPER_ADMIN_NAME,
  super_admin_email: process.env.SUPER_ADMIN_EMAIL,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  admin_name: process.env.ADMIN_NAME,
  admin_email: process.env.ADMIN_EMAIL,
  admin_password: process.env.ADMIN_PASSWORD,
  doctor_name: process.env.DOCTOR_NAME,
  doctor_email: process.env.DOCTOR_EMAIL,
  doctor_password: process.env.DOCTOR_PASSWORD,
};
