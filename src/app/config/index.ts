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
}