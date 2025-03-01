import { ExecutionMode } from "@doko-js/core";
import { Vesting_contract_san_v2Contract } from "../artifacts/js/vesting_contract_san_v2";
import { Token_registryContract } from "../artifacts/js/token_registry";

const vesting_contract = new Vesting_contract_san_v2Contract({ mode: ExecutionMode.SnarkExecute })
const [aleoUser1, aleoUser2] = vesting_contract.getAccounts()

async function main() {
    const create_record_tx = await vesting_contract.issue_access_record(aleoUser2)
    const [access_record] = await create_record_tx.wait()
    console.log(access_record)


}

main()