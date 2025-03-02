import { CurrentUser } from "@/auth/current-user-decorator";
import { JwtAuthGuard } from "@/auth/jwt-auth.guard";
import { UserPayload } from "@/auth/jwt.strategy";
import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { PrismaService } from "@/prisma/prisma.service";
import { Body, Controller, Post, UseGuards, UsePipes } from "@nestjs/common";
import { z } from "zod";

const createMedicationControllerSchema = z.object({
  name: z.string(),
  dosage: z.string().optional(),
  frequency: z.string().optional(),
});

type CreateMedicationControllerSchema = z.infer<
  typeof createMedicationControllerSchema
>;

@Controller("/medications")
@UseGuards(JwtAuthGuard)
export class CreateMedicationController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(new ZodValidationPipe(createMedicationControllerSchema))
    body: CreateMedicationControllerSchema,
    @CurrentUser() user: UserPayload
  ) {
    const { name, dosage, frequency } = body;
    const patientId = user.sub;

    console.log({ name, dosage, frequency, patientId });

    await this.prisma.medication.create({
      data: { name, dosage, frequency, patientId },
    });
  }
}
