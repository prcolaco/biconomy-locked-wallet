/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BasicMetaTransactionInterface extends ethers.utils.Interface {
  functions: {
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getChainID()": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
}

export class BasicMetaTransaction extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BasicMetaTransactionInterface;

  functions: {
    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getChainID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  executeMetaTransaction(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainID(overrides?: CallOverrides): Promise<BigNumber>;

  "getChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  verify(
    owner: string,
    nonce: BigNumberish,
    chainID: BigNumberish,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
    owner: string,
    nonce: BigNumberish,
    chainID: BigNumberish,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    MetaTransactionExecuted(
      userAddress: null,
      relayerAddress: null,
      functionSignature: null
    ): TypedEventFilter<
      [string, string, string],
      { userAddress: string; relayerAddress: string; functionSignature: string }
    >;
  };

  estimateGas: {
    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getChainID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNonce(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
