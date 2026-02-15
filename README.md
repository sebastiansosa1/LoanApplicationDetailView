UmeLoans

# LoanApplicationDetailView
Software Engineer Role Assignment for an important FinTech company

## Tech stack:
- React
- Next.js
- Tailwind CSS
(As suggested)

## How to install:
- In Terminal, cd to the folder where you want to download and clone repo with:

git clone https://github.com/sebastiansosa1/LoanApplicationDetailView.git

cd LoanApplicationDetailView/nextjs-dashboard

npm install && npm run dev

- Open web browser to localhost:3000 (default)

- To run dev-server after installed:
cd LoanApplicationView/nextjs-dashboard
npm run dev


## What?
- Brief:
    I've implemented the loans page in a Dashboard-like web application according to the requirements defined in the Assignment.

- The Dashboard page:
    It has a skeleton placed as it was not part of the scope of the assignment. I thought here we could have some 
    useful information for the analysts, such as the total amount of money in loans that are pending of approval, and charts for approved, rejected, under review, and other useful metrics.

- The applicants page:
     we could have another table with all the applicants details, possibility to create, edit, or delete applicants, the count of loans taken for each applicant, internal reviews (good-payer or bad-payer), etc.

- The loans page:
    The important page for this assignment. It is far from being completed, but I think I covered almost all the cases where I could be evaluated:
    - I've created a table with all the information requested and also some visual helpers for the analysts, such as "traffic lights" for credit score based on the Illion scale and (considering that your company specialises in approving loans for clients with lower score than usual):
        - Good: 500 – 1,000
        - Warning: 200 – 499
        - Low: 0 – 199
    Note, This is defined in only one place (the "/definitions" file), so adapting the scale to your needs can be easily made.
    - Implemented a dropdown system for the analyst to change the status of the loans as they need. They also have color queues for better interpretation. Main features for this implementations are:
        - Pop-up to confirm the state change, as the change is non-trivial and cannot be reversed (according to specifications).
        - The options available in the drop-downs are only visible if they are available.
        - Implemented a simple state machine, that could be changed easily if needed. This is the engine that enforces the status flow.
    - Pagination for the table, as data could grow quickly.
    - There is a mock-db file with fake data. Tables are loans, and Applicants, loans are linked to applicants through the applicantId key.
    - There is a mock data file with all the "queries" needed for the project, and also a fake delay applied to them to simulate DB latency.

    As part of the improvements to be done (most of them are pretty much provided by a DB system which is not part of the scope of the assignment):
        - Sorting by any of the numeric (or enumerable) fields such as annual income, amount, application date, etc.
        - Filter by categories (such as status, purpose, applicant, etc)
        - Search
        - Categorise some data such as "employment status", and maybe "purpose" if it's useful (it could be very useful for other metrics)
        - Adding a profile photo for users in the charts, easier for the analysts to remember.
        - Format categorical data (such as Employment Status). I've done this for Status, currency and date as examples, but did not extend for all.
            

## How?
    I grabbed an already existing dashboard app skeleton as a base, and then designed and implemented the Loans page, and almost everything else on my own. I have made a heaps of changes to the original skeleton and the architecture, to accomodate for the requirements of the assignment.
    For example, the data base are only in-memory "tables" (arrays), and the data.ts file (where the queries are made) is a server component., so, when you change a loan status for example, and refresh the page, the new state will remain as you left it, until you reload the server.
	I've reshaped some of the features that were already there, such as pagination, to accomodate to the mock-up table.
    The DB has been designed by myself only to cover the basic requirements for the demo app. Assuming 1 table for applicants, 1 table for loans, and the ability for the same applicant to take multiple loans(closer to a real-life case). I took the "be creative" statement from the assignment very seriously, although I didn't implement a table for Status History, since it was not required in the front-end.

## Why?
    I grabbed an already existing skeleton to save some time and "not reinvent the wheel", but also to prove that I can also work on existing projects, as well as designing it on my own, like I did with the features requested.


I really hope enjoy reviewing my assignment, and feel free to contact me for a more technical and in-dept discussion.