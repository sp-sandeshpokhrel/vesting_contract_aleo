import {
  AccessRecord,
  BeneficiaryMetadata
} from "./types/vesting_contract_san";
import {
  getAccessRecordLeo,
  getBeneficiaryMetadataLeo
} from "./js2leo/vesting_contract_san";
import {
  getAccessRecord,
  getBeneficiaryMetadata
} from "./leo2js/vesting_contract_san";
import {
  ContractConfig,
  zkGetMapping,
  LeoAddress,
  LeoRecord,
  js2leo,
  leo2js,
  ExternalRecord,
  ExecutionMode,
  ExecutionContext,
  CreateExecutionContext,
  TransactionResponse
} from "@doko-js/core";
import {
  BaseContract
} from "../../contract/base-contract";
import {
  TransactionModel
} from "@provablehq/sdk";
import * as receipt from "./transitions/vesting_contract_san";

export class Vesting_contract_sanContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'vesting_contract_san',
      fee: '0.01',
      contractPath: 'artifacts/leo/vesting_contract_san',
      isImportedAleo: false
    });
  }
  async register_token(r0: bigint): Promise < TransactionResponse < TransactionModel & receipt.Vesting_contract_sanRegister_tokenTransition, [] >> {
    const r0Leo = js2leo.field(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('register_token', params);
    return result
  }

  async issue_access_record(r0: LeoAddress): Promise < TransactionResponse < TransactionModel & receipt.Vesting_contract_sanIssue_access_recordTransition, [LeoRecord] >> {
    const r0Leo = js2leo.address(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('issue_access_record', params);
    result.set_converter_fn([leo2js.record]);
    return result
  }

  async deposit(r0: LeoAddress, r1: bigint, r2: number, r3: number, r4: number, r5: bigint): Promise < TransactionResponse < TransactionModel & receipt.Vesting_contract_sanDepositTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.u32(r2);
    const r3Leo = js2leo.u32(r3);
    const r4Leo = js2leo.u32(r4);
    const r5Leo = js2leo.field(r5);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo, r4Leo, r5Leo]
    const result = await this.ctx.execute('deposit', params);
    return result
  }

  async claim(r0: AccessRecord, r1: bigint, r2: bigint, r3: boolean): Promise < TransactionResponse < TransactionModel & receipt.Vesting_contract_sanClaimTransition, [ExternalRecord < 'token_registry', 'Token' > , LeoRecord] >> {
    const r0Leo = js2leo.json(getAccessRecordLeo(r0));
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.field(r2);
    const r3Leo = js2leo.boolean(r3);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('claim', params);
    result.set_converter_fn([
      [leo2js.externalRecord, 'token_registry.aleo/Token'], leo2js.record
    ]);
    return result
  }

  async beneficiary_metadata(key: LeoAddress, defaultValue ? : BeneficiaryMetadata): Promise < BeneficiaryMetadata > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'beneficiary_metadata',
      params[0],
    );

    if (result != null)
      return getBeneficiaryMetadata(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`beneficiary_metadata returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async registered_token(key: bigint, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'registered_token',
      params[0],
    );

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`registered_token returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}