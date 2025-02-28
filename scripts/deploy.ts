import { ExecutionMode } from "@doko-js/core";
import { Vesting_contract_sanContract } from "../artifacts/js/vesting_contract_san";

const vesting_contract = new Vesting_contract_sanContract({ mode: ExecutionMode.SnarkExecute })
const token_id = BigInt(123456)//USDC token id
const [aleoUser1, aleoUser2] = vesting_contract.getAccounts()

async function main() {
  const tx = await vesting_contract.deploy()
  await tx.wait();

  const registerTransaction = await vesting_contract.register_token(token_id)
  await registerTransaction.wait()


}

async function deposit_and_claim() {
  const tx = await vesting_contract.deposit(aleoUser2, BigInt(1000000000), 1800, 100000, 10, token_id)
  await tx.wait()

  const record_issue_tx = await vesting_contract.issue_access_record(aleoUser2)
  await record_issue_tx.wait()

}