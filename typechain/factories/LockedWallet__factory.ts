/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LockedWallet } from "../LockedWallet";

export class LockedWallet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _receiver: string,
    _lock: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<LockedWallet> {
    return super.deploy(
      _receiver,
      _lock,
      overrides || {}
    ) as Promise<LockedWallet>;
  }
  getDeployTransaction(
    _receiver: string,
    _lock: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_receiver, _lock, overrides || {});
  }
  attach(address: string): LockedWallet {
    return super.attach(address) as LockedWallet;
  }
  connect(signer: Signer): LockedWallet__factory {
    return super.connect(signer) as LockedWallet__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LockedWallet {
    return new Contract(address, _abi, signerOrProvider) as LockedWallet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lock",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "claimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162001f7938038062001f798339818101604052810190620000299190620001b7565b6200005a60405180606001604052806037815260200162001f42603791398383620000b760201b62000ad51760201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508042620000a99190620002bb565b600281905550505062000400565b6200015b838383604051602401620000d2939291906200025b565b6040516020818303038152906040527f07c81217000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200016060201b60201c565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000815190506200019a81620003cc565b92915050565b600081519050620001b181620003e6565b92915050565b60008060408385031215620001cb57600080fd5b6000620001db8582860162000189565b9250506020620001ee85828601620001a0565b9150509250929050565b620002038162000318565b82525050565b600062000216826200029f565b620002228185620002aa565b93506200023481856020860162000356565b6200023f81620003bb565b840191505092915050565b62000255816200034c565b82525050565b6000606082019050818103600083015262000277818662000209565b9050620002886020830185620001f8565b6200029760408301846200024a565b949350505050565b600081519050919050565b600082825260208201905092915050565b6000620002c8826200034c565b9150620002d5836200034c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200030d576200030c6200038c565b5b828201905092915050565b600062000325826200032c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200037657808201518184015260208101905062000359565b8381111562000386576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b620003d78162000318565b8114620003e357600080fd5b50565b620003f1816200034c565b8114620003fd57600080fd5b50565b611b3280620004106000396000f3fe60806040526004361061007f5760003560e01c8063564b81ef1161004e578063564b81ef146101385780636281133d146101635780636a5e2650146101a0578063f7260d3e146101cb57610086565b80630c53c51c1461008b5780632d0335ab146100bb57806332f289cf146100f85780634e71d92d1461012157610086565b3661008657005b600080fd5b6100a560048036038101906100a09190610f4b565b6101f6565b6040516100b29190611619565b60405180910390f35b3480156100c757600080fd5b506100e260048036038101906100dd9190610f22565b610438565b6040516100ef91906117ae565b60405180910390f35b34801561010457600080fd5b5061011f600480360381019061011a9190610f22565b610480565b005b34801561012d57600080fd5b506101366107d5565b005b34801561014457600080fd5b5061014d610961565b60405161015a91906117ae565b60405180910390f35b34801561016f57600080fd5b5061018a60048036038101906101859190610fda565b61096e565b60405161019791906115b9565b60405180910390f35b3480156101ac57600080fd5b506101b5610aa9565b6040516101c291906117ae565b60405180910390f35b3480156101d757600080fd5b506101e0610aaf565b6040516101ed9190611537565b60405180910390f35b606061024c866000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610243610961565b8888888861096e565b61028b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102829061176e565b60405180910390fd5b6102dd60016000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b7490919063ffffffff16565b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000803073ffffffffffffffffffffffffffffffffffffffff16878960405160200161034c92919061149f565b6040516020818303038152906040526040516103689190611488565b6000604051808303816000865af19150503d80600081146103a5576040519150601f19603f3d011682016040523d82523d6000602084013e6103aa565b606091505b5091509150816103ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e69061170e565b60405180910390fd5b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b88338960405161042293929190611552565b60405180910390a1809250505095945050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166104c1610b8a565b73ffffffffffffffffffffffffffffffffffffffff1614610517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050e906116ee565b60405180910390fd5b60025442101561055c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105539061178e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c39061174e565b60405180910390fd5b600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161060c9190611537565b60206040518083038186803b15801561062457600080fd5b505afa158015610638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065c91906110fa565b90506107206040518060400160405280601f81526020017f436c61696d696e672062616c616e6365206f6620256920257320746f6b656e00815250828473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156106de57600080fd5b505afa1580156106f2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061071b91906110b9565b610c40565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161077d929190611590565b602060405180830381600087803b15801561079757600080fd5b505af11580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf9190611090565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610816610b8a565b73ffffffffffffffffffffffffffffffffffffffff161461086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906116ee565b60405180910390fd5b6002544210156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a89061178e565b60405180910390fd5b60004790506108f56040518060400160405280601a81526020017f436c61696d696e67204554482062616c616e6365206f6620256900000000000081525082610cdf565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561095d573d6000803e3d6000fd5b5050565b6000804690508091505090565b6000806109a68830898960405160200161098b94939291906114ed565b60405160208183030381529060405280519060200120610d7b565b90506000600182858888604051600081526020016040526040516109cd94939291906115d4565b6020604051602081039080840390855afa1580156109ef573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a629061172e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161492505050979650505050505050565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b6f838383604051602401610aed9392919061163b565b6040516020818303038152906040527f07c81217000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610dab565b505050565b60008183610b8291906118a8565b905092915050565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610c3457600080368080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509050600080369050905073ffffffffffffffffffffffffffffffffffffffff818301511692505050610c3c565b339050610c3d565b5b90565b610cda838383604051602401610c58939291906116a9565b6040516020818303038152906040527fa3f5c739000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610dab565b505050565b610d778282604051602401610cf5929190611679565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610dab565b5050565b600081604051602001610d8e91906114c7565b604051602081830303815290604052805190602001209050919050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000610de7610de2846117fa565b6117c9565b905082815260208101848484011115610dff57600080fd5b610e0a848285611993565b509392505050565b6000610e25610e208461182a565b6117c9565b905082815260208101848484011115610e3d57600080fd5b610e488482856119a2565b509392505050565b600081359050610e5f81611a89565b92915050565b600081519050610e7481611aa0565b92915050565b600081359050610e8981611ab7565b92915050565b600082601f830112610ea057600080fd5b8135610eb0848260208601610dd4565b91505092915050565b600082601f830112610eca57600080fd5b8151610eda848260208601610e12565b91505092915050565b600081359050610ef281611ace565b92915050565b600081519050610f0781611ace565b92915050565b600081359050610f1c81611ae5565b92915050565b600060208284031215610f3457600080fd5b6000610f4284828501610e50565b91505092915050565b600080600080600060a08688031215610f6357600080fd5b6000610f7188828901610e50565b955050602086013567ffffffffffffffff811115610f8e57600080fd5b610f9a88828901610e8f565b9450506040610fab88828901610e7a565b9350506060610fbc88828901610e7a565b9250506080610fcd88828901610f0d565b9150509295509295909350565b600080600080600080600060e0888a031215610ff557600080fd5b60006110038a828b01610e50565b97505060206110148a828b01610ee3565b96505060406110258a828b01610ee3565b955050606088013567ffffffffffffffff81111561104257600080fd5b61104e8a828b01610e8f565b945050608061105f8a828b01610e7a565b93505060a06110708a828b01610e7a565b92505060c06110818a828b01610f0d565b91505092959891949750929550565b6000602082840312156110a257600080fd5b60006110b084828501610e65565b91505092915050565b6000602082840312156110cb57600080fd5b600082015167ffffffffffffffff8111156110e557600080fd5b6110f184828501610eb9565b91505092915050565b60006020828403121561110c57600080fd5b600061111a84828501610ef8565b91505092915050565b61112c81611910565b82525050565b61113b816118fe565b82525050565b61115261114d826118fe565b6119d5565b82525050565b61116181611922565b82525050565b6111708161192e565b82525050565b6111876111828261192e565b6119e7565b82525050565b60006111988261185a565b6111a28185611870565b93506111b28185602086016119a2565b6111bb81611a6b565b840191505092915050565b60006111d18261185a565b6111db8185611881565b93506111eb8185602086016119a2565b80840191505092915050565b6112086112038261196f565b6119d5565b82525050565b600061121982611865565b611223818561188c565b93506112338185602086016119a2565b61123c81611a6b565b840191505092915050565b6000611254601c8361189d565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b600061129460198361188c565b91507f6f6e6c792072656365697665722063616e20646f2074686973000000000000006000830152602082019050919050565b60006112d4601c8361188c565b91507f46756e6374696f6e2063616c6c206e6f74207375636365737366756c000000006000830152602082019050919050565b600061131460118361188c565b91507f496e76616c6964207369676e61747572650000000000000000000000000000006000830152602082019050919050565b6000611354602b8361188c565b91507f6d75737420737570706c7920616e20455243323020746f6b656e20636f6e747260008301527f61637420616464726573730000000000000000000000000000000000000000006020830152604082019050919050565b60006113ba60218361188c565b91507f5369676e657220616e64207369676e617475726520646f206e6f74206d61746360008301527f68000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611420600d8361188c565b91507f77616c6c6574206c6f636b6564000000000000000000000000000000000000006000830152602082019050919050565b61145c81611958565b82525050565b61147361146e82611958565b611a03565b82525050565b61148281611962565b82525050565b600061149482846111c6565b915081905092915050565b60006114ab82856111c6565b91506114b78284611141565b6014820191508190509392505050565b60006114d282611247565b91506114de8284611176565b60208201915081905092915050565b60006114f98287611462565b60208201915061150982866111f7565b6014820191506115198285611462565b60208201915061152982846111c6565b915081905095945050505050565b600060208201905061154c6000830184611132565b92915050565b60006060820190506115676000830186611132565b6115746020830185611123565b8181036040830152611586818461118d565b9050949350505050565b60006040820190506115a56000830185611132565b6115b26020830184611453565b9392505050565b60006020820190506115ce6000830184611158565b92915050565b60006080820190506115e96000830187611167565b6115f66020830186611479565b6116036040830185611167565b6116106060830184611167565b95945050505050565b60006020820190508181036000830152611633818461118d565b905092915050565b60006060820190508181036000830152611655818661120e565b90506116646020830185611132565b6116716040830184611453565b949350505050565b60006040820190508181036000830152611693818561120e565b90506116a26020830184611453565b9392505050565b600060608201905081810360008301526116c3818661120e565b90506116d26020830185611453565b81810360408301526116e4818461120e565b9050949350505050565b6000602082019050818103600083015261170781611287565b9050919050565b60006020820190508181036000830152611727816112c7565b9050919050565b6000602082019050818103600083015261174781611307565b9050919050565b6000602082019050818103600083015261176781611347565b9050919050565b60006020820190508181036000830152611787816113ad565b9050919050565b600060208201905081810360008301526117a781611413565b9050919050565b60006020820190506117c36000830184611453565b92915050565b6000604051905081810181811067ffffffffffffffff821117156117f0576117ef611a3c565b5b8060405250919050565b600067ffffffffffffffff82111561181557611814611a3c565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff82111561184557611844611a3c565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60006118b382611958565b91506118be83611958565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118f3576118f2611a0d565b5b828201905092915050565b600061190982611938565b9050919050565b600061191b82611938565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061197a82611981565b9050919050565b600061198c82611938565b9050919050565b82818337600083830152505050565b60005b838110156119c05780820151818401526020810190506119a5565b838111156119cf576000848401525b50505050565b60006119e0826119f1565b9050919050565b6000819050919050565b60006119fc82611a7c565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b611a92816118fe565b8114611a9d57600080fd5b50565b611aa981611922565b8114611ab457600080fd5b50565b611ac08161192e565b8114611acb57600080fd5b50565b611ad781611958565b8114611ae257600080fd5b50565b611aee81611962565b8114611af957600080fd5b5056fea264697066735822122000e93c684cabdca5c458304cf2a6714ba83e953c81dc6269cafeb105ca08ba5664736f6c634300080000334465706c6f79696e672061204c6f636b656457616c6c657420666f722027257327206c6f636b656420666f72202569207365636f6e6473";
