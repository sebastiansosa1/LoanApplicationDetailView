const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Test',
    email: 'test@umeloans.com',
    password: '123456',
  },
];

const applicants = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    annual_income: 89000,
    employment_status: 'full_time',
    credit_score: 720,
    email: 'evil@rabbit.com'
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    annual_income: 95000,
    employment_status: 'part_time',
    credit_score: 501,
    email: 'delba@oliveira.com'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    annual_income: 105000,
    employment_status: 'contractor',
    credit_score: 850,
    email: 'lee@robinson.com'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    annual_income: 73500,
    employment_status: 'full_time',
    credit_score: 850,
    email: 'michael@novotny.com'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    annual_income: 150000,
    employment_status: 'full_time',
    credit_score: 230,
    email: 'amy@burns.com'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    annual_income: 89000,
    employment_status: 'unemployed',
    credit_score: 937,
    email: 'balazs@orban.com'
  },
];

const loans = [
  {
    customer_id: applicants[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: applicants[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: applicants[4].id,
    amount: 3040,
    status: 'pending',
    date: '2022-10-29',
  },
  {
    customer_id: applicants[3].id,
    amount: 44800,
    status: 'pending',
    date: '2023-09-10',
  },
  {
    customer_id: applicants[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: applicants[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: applicants[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: applicants[3].id,
    amount: 32545,
    status: 'pending',
    date: '2023-06-09',
  },
  {
    customer_id: applicants[4].id,
    amount: 1250,
    status: 'pending',
    date: '2023-06-17',
  },
  {
    customer_id: applicants[5].id,
    amount: 8546,
    status: 'pending',
    date: '2023-06-07',
  },
  {
    customer_id: applicants[1].id,
    amount: 500,
    status: 'pending',
    date: '2023-08-19',
  },
  {
    customer_id: applicants[5].id,
    amount: 8945,
    status: 'pending',
    date: '2023-06-03',
  },
  {
    customer_id: applicants[2].id,
    amount: 1000,
    status: 'pending',
    date: '2022-06-05',
  },
];

export { users, applicants, loans };
