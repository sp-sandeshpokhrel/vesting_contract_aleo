import {
  z
} from "zod";
import {
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
  leoSignatureSchema,
  LeoArray,
  LeoAddress,
  ExternalRecord,
  tx
} from "@doko-js/core";

export interface TokenMetadata {
  token_id: bigint;
  name: bigint;
  symbol: bigint;
  decimals: number;
  supply: bigint;
  max_supply: bigint;
  admin: LeoAddress;
  external_authorization_required: boolean;
  external_authorization_party: LeoAddress;
}

export const leoTokenMetadataSchema = z.object({
  token_id: leoFieldSchema,
  name: leoU128Schema,
  symbol: leoU128Schema,
  decimals: leoU8Schema,
  supply: leoU128Schema,
  max_supply: leoU128Schema,
  admin: leoAddressSchema,
  external_authorization_required: leoBooleanSchema,
  external_authorization_party: leoAddressSchema,
});
export type TokenMetadataLeo = z.infer < typeof leoTokenMetadataSchema > ;

export interface TokenOwner {
  account: LeoAddress;
  token_id: bigint;
}

export const leoTokenOwnerSchema = z.object({
  account: leoAddressSchema,
  token_id: leoFieldSchema,
});
export type TokenOwnerLeo = z.infer < typeof leoTokenOwnerSchema > ;

export interface AccessRecord {
  owner: LeoAddress;
  _nonce: bigint;
}

export const leoAccessRecordSchema = z.object({
  owner: leoAddressSchema,
  _nonce: leoGroupSchema,
});
export type AccessRecordLeo = z.infer < typeof leoAccessRecordSchema > ;

export interface BeneficiaryMetadata {
  block_duration: number;
  start_height: number;
  number_of_interval: number;
  total_amount: bigint;
  claimed_amount: bigint;
  token_id: bigint;
}

export const leoBeneficiaryMetadataSchema = z.object({
  block_duration: leoU32Schema,
  start_height: leoU32Schema,
  number_of_interval: leoU32Schema,
  total_amount: leoU128Schema,
  claimed_amount: leoU128Schema,
  token_id: leoFieldSchema,
});
export type BeneficiaryMetadataLeo = z.infer < typeof leoBeneficiaryMetadataSchema > ;