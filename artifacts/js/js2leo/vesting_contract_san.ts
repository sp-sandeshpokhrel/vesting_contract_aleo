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
  js2leo
} from "@doko-js/core";


export function getTokenMetadataLeo(tokenMetadata: TokenMetadata): TokenMetadataLeo {
  const result: TokenMetadataLeo = {
    token_id: js2leo.field(tokenMetadata.token_id),
    name: js2leo.u128(tokenMetadata.name),
    symbol: js2leo.u128(tokenMetadata.symbol),
    decimals: js2leo.u8(tokenMetadata.decimals),
    supply: js2leo.u128(tokenMetadata.supply),
    max_supply: js2leo.u128(tokenMetadata.max_supply),
    admin: js2leo.address(tokenMetadata.admin),
    external_authorization_required: js2leo.boolean(tokenMetadata.external_authorization_required),
    external_authorization_party: js2leo.address(tokenMetadata.external_authorization_party),
  }
  return result;
}

export function getTokenOwnerLeo(tokenOwner: TokenOwner): TokenOwnerLeo {
  const result: TokenOwnerLeo = {
    account: js2leo.address(tokenOwner.account),
    token_id: js2leo.field(tokenOwner.token_id),
  }
  return result;
}

export function getAccessRecordLeo(accessRecord: AccessRecord): AccessRecordLeo {
  const result: AccessRecordLeo = {
    owner: js2leo.privateField(js2leo.address(accessRecord.owner)),
    _nonce: js2leo.publicField(js2leo.group(accessRecord._nonce)),
  }
  return result;
}

export function getBeneficiaryMetadataLeo(beneficiaryMetadata: BeneficiaryMetadata): BeneficiaryMetadataLeo {
  const result: BeneficiaryMetadataLeo = {
    block_duration: js2leo.u32(beneficiaryMetadata.block_duration),
    start_height: js2leo.u32(beneficiaryMetadata.start_height),
    number_of_interval: js2leo.u32(beneficiaryMetadata.number_of_interval),
    total_amount: js2leo.u128(beneficiaryMetadata.total_amount),
    claimed_amount: js2leo.u128(beneficiaryMetadata.claimed_amount),
    token_id: js2leo.field(beneficiaryMetadata.token_id),
  }
  return result;
}