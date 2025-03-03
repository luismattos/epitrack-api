import { FetchRecentMedicationsController } from "./http/controllers/fetch-recent-medications.controller";
import { CreateMedicationController } from "./http/controllers/create-medication.controller";
import { CreateAccountController } from "./http/controllers/create-account.controller";
import { AuthenticateController } from "./http/controllers/authenticate.controller";
import { PrismaService } from "./prisma/prisma.service";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
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
    FetchRecentMedicationsController,
    CreateMedicationController,
    CreateAccountController,
    AuthenticateController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
