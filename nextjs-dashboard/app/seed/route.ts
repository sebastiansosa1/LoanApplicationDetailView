// import bcrypt from 'bcrypt';
// import postgres from 'postgres';
// import { loans, applicants, users } from '../lib/placeholder-data';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// async function seedUsers() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// async function seedLoans() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await sql`
//     CREATE TABLE IF NOT EXISTS Loans (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       applicant_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedLoans = await Promise.all(
//     Loans.map(
//       (Loan) => sql`
//         INSERT INTO Loans (applicant_id, amount, status, date)
//         VALUES (${Loan.applicant_id}, ${Loan.amount}, ${Loan.status}, ${Loan.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedLoans;
// }

// async function seedApplicants() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await sql`
//     CREATE TABLE IF NOT EXISTS applicants (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedApplicants = await Promise.all(
//     applicants.map(
//       (applicant) => sql`
//         INSERT INTO applicants (id, name, email, image_url)
//         VALUES (${applicant.id}, ${applicant.name}, ${applicant.email}, ${applicant.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedApplicants;
// }

// export async function GET() {
//   try {
//     const result = await sql.begin((sql) => [
//       seedUsers(),
//       seedApplicants(),
//       seedLoans(),
//     ]);

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
