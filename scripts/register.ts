import { ExecutionMode } from "@doko-js/core";
import { Vesting_contract_san_v2Contract } from "../artifacts/js/vesting_contract_san_v2";
import { Token_registryContract } from "../artifacts/js/token_registry";

const vesting_contract = new Vesting_contract_san_v2Contract({ mode: ExecutionMode.SnarkExecute })
const token_registry = new Token_registryContract({ mode: ExecutionMode.SnarkExecute })
const token_id = BigInt(123456)// random token id
const [aleoUser1, aleoUser2] = vesting_contract.getAccounts()

async function main() {

    const register_token_token_registry_tx = await token_registry.register_token(token_id, BigInt(1000000000), BigInt(1000000000), 6, BigInt(1000000000000), false, aleoUser1)
    await register_token_token_registry_tx.wait()


    const registerTransaction = await vesting_contract.register_token(token_id)
    await registerTransaction.wait()


}

main()