# Bank Simulator with Interest

### How to Build & Run

1. You would need to deploy the program on Solana blockchain first. You can use SolPg to get started quickly or clone this and work locally:
 - SOLPg
   - Click on the [Solana Playground](https://beta.solpg.io/645fc8f0d6ebe745da2043a6) link and deploy it
  - Working Locally
    - Install [Anchor](https://www.anchor-lang.com/), [Rust](https://www.rust-lang.org/tools/install) and [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) and [Clockwork CLI](https://docs.clockwork.xyz/welcome/installation) and clone this repository
    - Run `clockwork localnet`
    - Then, open a new terminal instance and head over to `program/` directory using `cd program/` command.
    - Enter `anchor build` and `yarn install` in the same directory.
    - Then, enter `anchor deploy`, you'll get a program Id at the end, copy it and paste it in [declare_id macro](/program/programs/bank-simulator/src/lib.rs) and in [Anchor.toml localnet section](/program/Anchor.toml)
    - Finally, enter `anchor test --skip-local-validator` to build everything and run tests.

> Note that you may have some issues using latest version of Solana CLI. It is recommend that you install Solana CLI version 1.14.18
If you see blockhash keep expiring when you run `anchor deploy` or when running `anchor test`, then just stop your clockwork validator and re-start it. That will solve the issue.
  

2. To launch the frontend, head over to `/app` directory and enter: `yarn install && yarn dev`


### Automation

We'll be using [Clockwork](https://www.clockwork.xyz/) for running a cron job that updates our balance with interest returns every 10 seconds. In the real world, interest returns are deposited on a periodic basis, the interval however is large, like quarterly or yearly. We'll be depositing every 10 seconds to quickly observe changes and understand better.

Clockwork has a thing called [Threads](https://docs.clockwork.xyz/developers/threads), which trigger certain instruction based on a certain trigger condition. For our case, the trigger condition is a Cronjob every 10 seconds.

One important thing about our dApp is that our interest returns will stop after about 5 minutes, the reason for that is that Clockwork requires some amount of fee to run each automation transaction. In our program, we're defining a very small fee. We can increase it to enable our automation to work for a longer time!

### Anchor Program

Let's go through the code and understand how our program works.

1. Constants

- 1.1 Interest, Cron Schedule, Automation Fee
- 1.2 Seeds

1. Initializing Account

- 2.1 Defining `InitilizeAccount` context
- 2.2 Defining Clockwork Target Instruction and Trigger
- 2.3 Making a CPI to Clockwork program
  
3. Updating Balance
- 3.1 Depositing Amount
- 3.2 Withdrawing Amount
- 3.3 Adding Interest
