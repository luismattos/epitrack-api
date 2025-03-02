import { CreateMedicationController } from "./http/controllers/create-medication.controller";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { AuthModule } from "./auth/auth.module";
import { CreateAccountController } from "./http/controllers/create-account.controller";
import { AuthenticateController } from "./http/controllers/authenticate.controller";
import { envSchema } from "./env/env";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateMedicationController,
    CreateAccountController,
    AuthenticateController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
