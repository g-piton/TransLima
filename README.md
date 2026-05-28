# Translima Campinas Transportes e Turismo

Site institucional da Translima Campinas Transportes e Turismo, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## Stack

- Next.js com App Router
- React e TypeScript
- Tailwind CSS
- React Hook Form e Zod
- Lucide React
- Framer Motion
- Prisma ORM com suporte opcional a PostgreSQL

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Banco de dados

O site funciona sem banco configurado. Quando `DATABASE_URL` estiver presente, a API salva as solicitações de orçamento no PostgreSQL via Prisma.

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/translima"
```

Depois rode:

```bash
npx prisma migrate dev
```

## API

- `POST /api/leads`: recebe solicitações de orçamento.

## Orçamento por WhatsApp

O formulário de orçamento valida os dados e abre o WhatsApp com uma mensagem preenchida para o número `19 981348335`. Se `DATABASE_URL` estiver configurado, a solicitação também fica salva no banco.

Para alterar o número de destino, edite `quoteWhatsappNumber` em `src/components/forms/quote-form.tsx`.

## Conteúdo editável

Os dados institucionais ficam em `src/data`:

- `services.ts`
- `fleet.ts`
- `partners.ts`
- `itinerary.ts`
