import {
  tx
} from "@doko-js/core";
import * as records from "../types/vesting_contract_san";
import {
  Token_registryTransfer_publicTransition,
  Token_registryTransfer_public_to_privateTransition
} from "./token_registry";

export type Vesting_contract_sanRegister_tokenTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'vesting_contract_san', 'register_token' > , ] >
  export type Vesting_contract_sanIssue_access_recordTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.AccessRecord > ], 'vesting_contract_san', 'issue_access_record' > , ] >
  export type Vesting_contract_sanDepositTransition = tx.ExecutionReceipt < [...Token_registryTransfer_publicTransition['execution']['transitions'],
    tx.Transition < [tx.FutureOutput], 'vesting_contract_san', 'deposit' > ,
  ] >
  export type Vesting_contract_sanClaimTransition = tx.ExecutionReceipt < [...Token_registryTransfer_public_to_privateTransition['execution']['transitions'],
    tx.Transition < [tx.ExternalRecordOutput, tx.RecordOutput < records.AccessRecord > , tx.FutureOutput], 'vesting_contract_san', 'claim' > ,
  ] >