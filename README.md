# LUNAtic score calculator

Discover your LUNAtic score, based on your participation in the Terra ecosystem.

### Live Demo: https://lunatic-score-calculator.vercel.app/

## Implementation

This web app uses:

- Data from [Flipside Crypto](https://flipsidecrypto.com/)
- [Next.js](https://nextjs.org/) and [Tailwind CSS & UI](https://tailwindcss.com/) for the front-end

### Scoring

LUNAtic score is calculated by looking at the user's participation in staking, voting and depositing activities.
The score is the sum of the following components. A SQL query was produced for each component and exposed as an API endpoint via Flipside Crypto.

| Component | API endpoint | SQL query |
| ------------- | ------------- | ------------- |
| Amount of LUNA staked | https://api.flipsidecrypto.com/api/v2/queries/663f6b3b-d6c8-4957-ba9c-ed5a74ab717d/data/latest  | [query](sql/staked_luna_amount.sql) |
| Number of Anchor UST deposits | https://api.flipsidecrypto.com/api/v2/queries/93247971-5bcd-43c4-9542-095f8a12db1e/data/latest | [query](sql/anchor_ust_deposits_counts.sql) |
| Number of Anchor ANC staking transactions | https://api.flipsidecrypto.com/api/v2/queries/d9120881-c198-4339-bf9c-682a47059d6f/data/latest | [query](sql/anchor_anc_staking_counts) |
| Number of Terra governance votes cast | https://api.flipsidecrypto.com/api/v2/queries/f0cf0d93-d5a9-4f0f-be17-ba2e37f5a4e3/data/latest | [query](sql/terra_votes_counts.sql) |
| Number of Pylon Pool Deposits | https://api.flipsidecrypto.com/api/v2/queries/87724d52-076b-4e1a-98ef-8cd5db303ded/data/latest |[query](sql/pylon_pool_deposit_counts.sql)  |


There is no upper limit to the score, nor is there any form of scaling factor. This allows the most invested Terra users to attain more ludicrous LUNAtic scores.

## Deploy your own

Deploy the app using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkarlxlee%2Flunatic-score-calculator)

## How to use

Clone the repo.
`yarn install` then `yarn dev`
