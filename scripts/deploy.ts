import { ExecutionMode } from "@doko-js/core";
import { Vesting_contract_san_v2Contract } from "../artifacts/js/vesting_contract_san_v2";
import { Token_registryContract } from "../artifacts/js/token_registry";

const vesting_contract = new Vesting_contract_san_v2Contract({ mode: ExecutionMode.SnarkExecute })
const token_registry = new Token_registryContract({ mode: ExecutionMode.SnarkExecute })
const token_id = BigInt(123456)//USDC token id
const [aleoUser1, aleoUser2] = vesting_contract.getAccounts()

async function main() {
  // const token_registry_tx = await token_registry.deploy()
  // await token_registry_tx.wait()

  const tx = await vesting_contract.deploy()
  await tx.wait();


}


main()