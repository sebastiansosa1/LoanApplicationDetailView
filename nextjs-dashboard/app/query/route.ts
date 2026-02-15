// // import postgres from 'postgres';

// // const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// // async function listLoans() {
// // 	const data = await sql`
// //     SELECT loans.amount, customers.name
// //     FROM loans
// //     JOIN customers ON loans.customer_id = customers.id
// //     WHERE loans.amount = 666;
// //   `;

// // 	return data;
// // }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   // try {
//   // 	return Response.json(await listLoans());
//   // } catch (error) {
//   // 	return Response.json({ error }, { status: 500 });
//   // }
// }
