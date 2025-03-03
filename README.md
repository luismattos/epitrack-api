# MVP: Mínimo Produto Viável

## v0.1.0: MVP Essencial

**Objetivo:**
Estabelecer o núcleo do sistema, permitindo que o usuário se registre, faça login, visualize seu perfil (somente leitura) e gerencie seus medicamentos via operações CRUD básicas. Essa versão valida o modelo de negócio, focando no core.

### Funcionalidades (Controllers)

- **Auth Module:**
  - **RegisterController:** Realiza o cadastro de novos usuários (validação e criptografia da senha).
  - **AuthenticateController:** Gerencia o login e gera o token JWT para acesso seguro.

  *Observação:* Endpoints de recuperação e renovação de senha serão adicionados futuramente, se necessário.

- **User Module:**
  - **GetUserProfileController:** Retorna os dados do perfil do usuário autenticado (apenas leitura).

- **Medication Module:**
  - **CreateMedicationController:** Cria um novo medicamento e o associa ao usuário.
  - **ListMedicationsController:** Lista todos os medicamentos cadastrados pelo usuário.
  - **GetMedicationController:** Retorna os detalhes de um medicamento específico.

  *Observação:* Endpoints para update/delete poderão ser implementados em versões futuras se não forem críticos para o MVP.

### Modelagem de Dados (v0.1.0)

```prisma
model User {
  id       String   @id @default(uuid())
  email    String   @unique
  password String

  @@map("users")
}

model Medication {
  id      String   @id @default(uuid())
  name    String
  userId  String   @map("user_id")

  user    User     @relation(fields: [userId], references: [id])

  @@map("medications")
}
```

---

## v0.2.0: Registro de Uso

**Objetivo:**
Permitir que os usuários registrem e consultem o histórico de administração dos medicamentos (logs), possibilitando o monitoramento da adesão ao tratamento.

### Funcionalidades (Controllers)

- **Medication Log Module:**
  - **CreateMedicationLogController:** Registra um novo log de administração, recebendo a data/hora (takenAt).
  - **ListMedicationLogsController:** Retorna o histórico de logs para um medicamento específico.

### Modelagem de Dados (v0.2.0)

```prisma
model Medication {
  id         String          @id @default(uuid())
  name       String
  userId     String          @map("user_id")
  logs       MedicationLog[] // Associação para logs

  user       User            @relation(fields: [userId], references: [id])

  @@map("medications")
}

model MedicationLog {
  id           String      @id @default(uuid())
  medicationId String      @map("medication_id")
  takenAt      DateTime    @map("taken_at")

  medication   Medication  @relation(fields: [medicationId], references: [id])

  @@map("medication_logs")
}
```

---

## v0.3.0: Notificações e Alertas

**Objetivo:**
Implementar notificações para alertar os usuários sobre eventos críticos (por exemplo, horários de medicação) e permitir a configuração personalizada dos alertas.

### Funcionalidades (Controllers)

- **Notification Module:**
  - **ScheduleNotificationController:** Agenda e dispara notificações para eventos críticos.
  - **GetNotificationsController:** Retorna o histórico de notificações enviadas.
  - **UpdateNotificationPreferencesController:** Permite que o usuário atualize suas configurações de notificação.

### Modelagem de Dados (v0.3.0)

```prisma
model User {
  id             String          @id @default(uuid())
  email          String          @unique
  password       String
  medications    Medication[]
  notifications  Notification[]  // Associação para notificações

  @@map("users")
}

model Notification {
  id       String   @id @default(uuid())
  userId   String   @map("user_id")
  message  String
  sentAt   DateTime @default(now()) @map("sent_at")
  read     Boolean  @default(false)

  user     User     @relation(fields: [userId], references: [id])

  @@map("notifications")
}
```

---

## v0.4.0: Visualização e Monitoramento

**Objetivo:**  
Fornecer um dashboard que agrega os dados dos medicamentos, logs e notificações, facilitando o monitoramento e a análise do tratamento pelo usuário.

### Funcionalidades (Controllers)

- **Dashboard Module:**
  - **GetDashboardDataController:** Agrega e retorna os dados dos módulos existentes para uma visão centralizada.

### Modelagem de Dados (v0.4.0)

*Sem alterações nos modelos; o dashboard é gerado por meio de consultas e agregações dos modelos existentes (User, Medication, MedicationLog e Notification).*

---

## v0.5.0: Integração: Prescriptions e Refinamento Contínuo

**Objetivo:**  
Implementar a funcionalidade de prescrições, permitindo a emissão e o gerenciamento das mesmas associadas aos medicamentos, enquanto incorporamos refinamentos contínuos aos modelos já existentes.

### Funcionalidades (Controllers)

- **Prescription Module:**
  - **CreatePrescriptionController:** Cria uma nova prescrição para um medicamento.
  - **ListPrescriptionsController:** Lista as prescrições associadas.
  - **GetPrescriptionController:** Retorna os detalhes de uma prescrição.
  - **UpdatePrescriptionController:** Atualiza os dados de uma prescrição.
  - **DeletePrescriptionController:** Remove uma prescrição.

### Modelagem de Dados (v0.5.0)

Nesta versão, além de adicionar o modelo *Prescription*, incorporamos refinamentos dos modelos existentes que se tornam necessários para suportar as prescrições e enriquecer o domínio.

```prisma
model Prescription {
  id           String    @id @default(uuid())
  medicationId String    @map("medication_id")
  prescribedAt DateTime  @default(now()) @map("prescribed_at")
  
  medication   Medication  @relation(fields: [medicationId], references: [id])
  
  @@map("prescriptions")
}

// Refinamentos incorporados:
model User {
  id             String         @id @default(uuid())
  name           String         // Nova propriedade adicionada
  email          String         @unique
  password       String
  medications    Medication[]
  notifications  Notification[]

  @@map("users")
}

model Medication {
  id         String          @id @default(uuid())
  name       String
  dosage     String?         // Nova propriedade: dosagem
  frequency  String?         // Nova propriedade: frequência
  userId     String          @map("user_id")
  logs       MedicationLog[]

  user       User            @relation(fields: [userId], references: [id])

  @@map("medications")
}

model MedicationLog {
  id           String      @id @default(uuid())
  medicationId String      @map("medication_id")
  takenAt      DateTime    @map("taken_at")
  note         String?     // Nova propriedade: observações

  medication   Medication  @relation(fields: [medicationId], references: [id])

  @@map("medication_logs")
}

model Notification {
  id       String   @id @default(uuid())
  userId   String   @map("user_id")
  message  String
  type     String?  // (Opcional) Nova propriedade: tipo de notificação
  sentAt   DateTime @default(now()) @map("sent_at")
  read     Boolean  @default(false)

  user     User     @relation(fields: [userId], references: [id])

  @@map("notifications")
}
```

---

## v0.6.0: Integração: Health Provider Registration

**Objetivo:**  
Permitir o cadastro, consulta e atualização dos dados dos profissionais de saúde, criando a base para a associação com os usuários.

### Funcionalidades (Controllers)

- **Health Provider Module:**
  - **RegisterHealthProviderController:** Registra um novo profissional de saúde.
  - **ListHealthProvidersController:** Lista os profissionais cadastrados.
  - **GetHealthProviderController:** Retorna os detalhes de um profissional.
  - **UpdateHealthProviderController:** Atualiza as informações de um profissional.
  - *(Opcional: DeleteHealthProviderController)*

### Modelagem de Dados (v0.6.0)

```prisma
model HealthProvider {
  id     String   @id @default(uuid())
  email  String   @unique

  @@map("health_providers")
}
```

---

## v0.7.0: Integração: User-Health Provider Association

**Objetivo:**  
Permitir a associação entre usuários e profissionais de saúde, gerenciando convites e a aceitação ou recusa dessa associação.

### Funcionalidades (Controllers)

- **User Health Provider Module:**
  - **SendInvitationController:** Envia um convite para associação entre usuário e profissional.
  - **AcceptInvitationController:** Processa a aceitação do convite.
  - **DeclineInvitationController:** Processa a recusa do convite.
  - **GetAssociationController:** Consulta o status da associação.

### Modelagem de Dados (v0.7.0)

```prisma
model UserHealthProvider {
  id               String         @id @default(uuid())
  userId           String         @map("user_id")
  healthProviderId String         @map("health_provider_id")
  status           String         @default("pending")

  user             User           @relation(fields: [userId], references: [id])
  healthProvider   HealthProvider @relation(fields: [healthProviderId], references: [id])

  @@unique([userId, healthProviderId])
  @@map("user_health_providers")
}

model User {
  id              String               @id @default(uuid())
  name            String
  email           String               @unique
  password        String
  medications     Medication[]
  notifications   Notification[]
  healthProviders UserHealthProvider[] // Associação com profissionais de saúde

  @@map("users")
}
```

---

Segue a versão final atualizada da seção de Commit Message Guidelines, agora incluindo também informações sobre o que altera o MAJOR (X):

---

## Commit Message Guidelines

Este projeto adota a convenção dos **Conventional Commits** para manter o histórico do Git claro, consistente e informativo. Cada commit deve seguir a estrutura:

```txt
<type>(<scope>): <short description> (vX.Y.Z)
```

### Tipos de Commit e Seus Impactos

- **feat:**
  Nova funcionalidade.
  *Impacto:* Incrementa o MINOR (Y).
  *Exemplo:*

  ```txt
  feat(auth): add RegisterController for user registration (v0.1.0)
  ```

- **fix:**
  Correção de bug ou ajuste interno (sem alterar a API pública).
  *Impacto:* Incrementa o PATCH (Z).
  *Exemplo:*

  ```txt
  fix(medication): correct relation mapping in Medication model (v0.1.1)
  ```

- **docs:**
  Alterações na documentação.
  *Impacto:* Incrementa o PATCH (Z).
  *Exemplo:*

  ```txt
  docs: update README with commit message guidelines (v0.3.2)
  ```

- **refactor:**
  Melhorias no código que aprimoram a estrutura ou legibilidade sem alterar a API pública.
  *Impacto:* Incrementa o PATCH (Z).
  *Exemplo:*

  ```txt
  refactor(user): update User model to include name field (v0.5.0)
  ```

- **chore:**
  Tarefas de manutenção, como atualizações de dependências, scripts ou configurações, ou a adição de bibliotecas (por exemplo, Zod, Supertest) que não afetam a funcionalidade.
  *Impacto:* Incrementa o PATCH (Z).
  *Exemplo:*

  ```txt
  chore: add Supertest library for API testing (v0.2.1)
  ```

- **breaking change:**
  Alterações que quebram a compatibilidade com versões anteriores da API.
  *Impacto:* Incrementa o MAJOR (X).
  Essas mudanças devem ser explicitamente documentadas no commit com um marcador `BREAKING CHANGE:` no corpo da mensagem.
  *Exemplo:*

```txt
feat(auth)!: change authentication token format

BREAKING CHANGE: The authentication token now uses a new encryption standard.
(v1.0.0)
```

### Boas Práticas

- **Commits Atômicos:**
  Cada commit deve abordar uma única mudança lógica para facilitar a revisão e o rollback, se necessário.

- **Mensagens Claras:**
  Use a mensagem resumida para descrever o que foi alterado e, quando necessário, inclua detalhes no corpo do commit, especialmente para alterações mais complexas ou breaking changes.

- **Referência de Versão:**
  Incluir a referência à versão (vX.Y.Z) ajuda a identificar em qual estágio do desenvolvimento a alteração foi introduzida. Por exemplo, uma correção de bug na v0.1.0 pode resultar em v0.1.1, enquanto uma alteração que quebra a compatibilidade pode levar à v1.0.0.

- **Uso Consistente dos Tipos:**
  Siga os tipos definidos (feat, fix, docs, refactor, chore, breaking change) para manter o histórico uniforme e facilitar a compreensão das mudanças.

---

## Problema com o @prisma/client

Esse erro geralmente ocorre quando o pacote `@prisma/client` não está instalado corretamente ou o cliente não foi gerado. Aqui estão algumas verificações e passos para resolver o problema:

1. **Verifique a instalação:**
   Certifique-se de que o pacote está instalado. No terminal, execute:

   ```bash
   npm install @prisma/client
   ```

   ou, se usar pnpm:

   ```bash
   pnpm add @prisma/client
   ```

2. **Gere o cliente do Prisma:**
   Depois de instalar, execute o comando:

   ```bash
   npx prisma generate
   ```

   Esse comando gera os arquivos do cliente com base no seu schema, permitindo o uso do `PrismaClient`.

3. **Verifique o seu package.json:**
   Confirme se a dependência `@prisma/client` está listada no seu package.json.

4. **Limpe o cache do TypeScript/IDE:**
   Às vezes, o TypeScript ou sua IDE pode precisar de um reinício para reconhecer as novas definições de tipo.

5. **Verifique a versão:**
   Certifique-se de estar usando uma versão compatível do `@prisma/client`. O import correto é:

   ```typescript
   import { PrismaClient } from '@prisma/client';
   ```

   Se a versão estiver desatualizada ou houver conflito, tente atualizar.

6. Se for preciso regerar as tabelas: `pnpm prisma migrate deploy`

---

## [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

![The Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)
