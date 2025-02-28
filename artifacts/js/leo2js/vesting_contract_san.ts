import {
  TokenMetadata,
  TokenMetadataLeo,
  TokenOwner,
  TokenOwnerLeo,
  AccessRecord,
  AccessRecordLeo,
  BeneficiaryMetadata,
  BeneficiaryMetadataLeo
} from "../types/vesting_contract_san";
import {
  leo2js,
  tx,
  parseJSONLikeString
} from "@doko-js/core";
import {
  PrivateKey
} from "@provablehq/sdk"


export function getTokenMetadata(tokenMetadata: TokenMetadataLeo): TokenMetadata {
  const result: TokenMetadata = {
    token_id: leo2js.field(tokenMetadata.token_id),
    name: leo2js.u128(tokenMetadata.name),
    symbol: leo2js.u128(tokenMetadata.symbol),
    decimals: leo2js.u8(tokenMetadata.decimals),
    supply: leo2js.u128(tokenMetadata.supply),
    max_supply: leo2js.u128(tokenMetadata.max_supply),
    admin: leo2js.address(tokenMetadata.admin),
    external_authorization_required: leo2js.boolean(tokenMetadata.external_authorization_required),
    external_authorization_party: leo2js.address(tokenMetadata.external_authorization_party),
  }
  return result;
}

export function getTokenOwner(tokenOwner: TokenOwnerLeo): TokenOwner {
  const result: TokenOwner = {
    account: leo2js.address(tokenOwner.account),
    token_id: leo2js.field(tokenOwner.token_id),
  }
  return result;
}

export function getAccessRecord(accessRecord: AccessRecordLeo): AccessRecord {
  const result: AccessRecord = {
    owner: leo2js.address(accessRecord.owner),
    _nonce: leo2js.group(accessRecord._nonce),
  }
  return result;
}


export function decryptAccessRecord(accessRecord: tx.RecordOutput < AccessRecord > | string, privateKey: string): AccessRecord {
  const encodedRecord: string = typeof accessRecord === 'string' ? accessRecord : accessRecord.value;
  const decodedRecord: string = PrivateKey.from_string(privateKey).to_view_key().decrypt(encodedRecord);
  const result: AccessRecord = getAccessRecord(parseJSONLikeString(decodedRecord));

  return result;
}

export function getBeneficiaryMetadata(beneficiaryMetadata: BeneficiaryMetadataLeo): BeneficiaryMetadata {
  const result: BeneficiaryMetadata = {
    block_duration: leo2js.u32(beneficiaryMetadata.block_duration),
    start_height: leo2js.u32(beneficiaryMetadata.start_height),
    number_of_interval: leo2js.u32(beneficiaryMetadata.number_of_interval),
    total_amount: leo2js.u128(beneficiaryMetadata.total_amount),
    claimed_amount: leo2js.u128(beneficiaryMetadata.claimed_amount),
    token_id: leo2js.field(beneficiaryMetadata.token_id),
  }
  return result;
}