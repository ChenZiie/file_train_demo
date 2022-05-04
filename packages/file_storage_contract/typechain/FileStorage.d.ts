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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FileStorageInterface extends ethers.utils.Interface {
  functions: {
    "addFile((string,string,string,uint256,string,uint256),string[])": FunctionFragment;
    "check_permission(string,string)": FunctionFragment;
    "deleteFile(uint256)": FunctionFragment;
    "getFileSize()": FunctionFragment;
    "getFilesInRange(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFile",
    values: [
      {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumberish;
        fileOwner: string;
        fileCreated: BigNumberish;
      },
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "check_permission",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFile",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFileSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFilesInRange",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "check_permission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFileSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFilesInRange",
    data: BytesLike
  ): Result;

  events: {};
}

export class FileStorage extends BaseContract {
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

  interface: FileStorageInterface;

  functions: {
    addFile(
      file: {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumberish;
        fileOwner: string;
        fileCreated: BigNumberish;
      },
      group: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    check_permission(
      fileId: string,
      senderId: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deleteFile(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFileSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFilesInRange(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, string, string, BigNumber, string, BigNumber] & {
          fileId: string;
          fileName: string;
          fileType: string;
          fileSize: BigNumber;
          fileOwner: string;
          fileCreated: BigNumber;
        })[]
      ]
    >;
  };

  addFile(
    file: {
      fileId: string;
      fileName: string;
      fileType: string;
      fileSize: BigNumberish;
      fileOwner: string;
      fileCreated: BigNumberish;
    },
    group: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  check_permission(
    fileId: string,
    senderId: string,
    overrides?: CallOverrides
  ): Promise<string>;

  deleteFile(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFileSize(overrides?: CallOverrides): Promise<BigNumber>;

  getFilesInRange(
    start: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([string, string, string, BigNumber, string, BigNumber] & {
      fileId: string;
      fileName: string;
      fileType: string;
      fileSize: BigNumber;
      fileOwner: string;
      fileCreated: BigNumber;
    })[]
  >;

  callStatic: {
    addFile(
      file: {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumberish;
        fileOwner: string;
        fileCreated: BigNumberish;
      },
      group: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    check_permission(
      fileId: string,
      senderId: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deleteFile(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getFileSize(overrides?: CallOverrides): Promise<BigNumber>;

    getFilesInRange(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([string, string, string, BigNumber, string, BigNumber] & {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumber;
        fileOwner: string;
        fileCreated: BigNumber;
      })[]
    >;
  };

  filters: {};

  estimateGas: {
    addFile(
      file: {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumberish;
        fileOwner: string;
        fileCreated: BigNumberish;
      },
      group: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    check_permission(
      fileId: string,
      senderId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deleteFile(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFileSize(overrides?: CallOverrides): Promise<BigNumber>;

    getFilesInRange(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFile(
      file: {
        fileId: string;
        fileName: string;
        fileType: string;
        fileSize: BigNumberish;
        fileOwner: string;
        fileCreated: BigNumberish;
      },
      group: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    check_permission(
      fileId: string,
      senderId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deleteFile(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFileSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFilesInRange(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}