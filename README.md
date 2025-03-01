# Intro

Vesting contract is a contract where admin can issue record for the beneficiary and beneficiary will use that record to claim funds privately.

## Features

1. Beneficiary address is hidden by hashing the address provided by the user while putting on chain.
2. Funds can be only be claimed if beneficiary has the access_record.
3. Funds get disbursed in number of interval over some block duration.

### From NPM

Install dokojs globally using npm:
`npm install -g @doko-js/cli@latest`

## Usage

For deploy:

```bash
npx tsx scripts/deploy.ts
```

For register token in vesting contract:

```bash
npx tsx scripts/register.ts
```

For creating access record for beneficiary that will be required for claiming the deposited fund by admin

```bash
npx tsx scripts/create_record.ts
```
