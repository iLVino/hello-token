/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HelloTokens, HelloTokensInterface } from "../HelloTokens";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenBridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wormhole",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "NotAnEvmAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "getLiquiditiesProvidedHistory",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "senderChain",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenA",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenB",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct LiquidityProvided[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "liquidityProvidedHistory",
    outputs: [
      {
        internalType: "uint16",
        name: "senderChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteRemoteLP",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "additionalVaas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "sendRemoteLP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBridge",
    outputs: [
      {
        internalType: "contract ITokenBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormholeRelayer",
    outputs: [
      {
        internalType: "contract IWormholeRelayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001c3338038062001c3383398101604081905262000034916200006f565b6001600160a01b0392831660805290821660a0521660c052620000b9565b80516001600160a01b03811681146200006a57600080fd5b919050565b6000806000606084860312156200008557600080fd5b620000908462000052565b9250620000a06020850162000052565b9150620000b06040850162000052565b90509250925092565b60805160a05160c051611ac56200016e60003960008181610158015281816103600152818161053c015281816109af01528181610be501528181610d310152610e220152600081816101a40152818161040f015281816104a2015281816105eb0152818161067e015281816108ff0152818161098001528181610b3501528181610bb601528181610dc40152610eb50152600081816101d80152818161026e015281816107580152610f490152611ac56000f3fe60806040526004361061007b5760003560e01c806384acd1bb1161004e57806384acd1bb14610146578063c6328a4614610192578063da25b725146101c6578063df50b522146101fa57600080fd5b80631bac053a14610080578063529dca32146100e15780635a70e221146100f65780636a4e54b514610124575b600080fd5b34801561008c57600080fd5b506100a061009b3660046111b3565b61020d565b6040805161ffff90961686526001600160a01b03948516602087015292841692850192909252919091166060830152608082015260a0015b60405180910390f35b6100f46100ef366004611325565b610263565b005b34801561010257600080fd5b5061011661011136600461141b565b61072c565b6040519081526020016100d8565b34801561013057600080fd5b506101396107d1565b6040516100d8919061143f565b34801561015257600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d8565b34801561019e57600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d257600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b6100f46102083660046114d6565b610870565b6000818154811061021d57600080fd5b6000918252602090912060049091020180546001820154600283015460039093015461ffff83169450620100009092046001600160a01b03908116939181169291169085565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102d85760405162461bcd60e51b815260206004820152601560248201527413db9b1e481ddbdc9b5a1bdb1948185b1b1bddd959605a1b60448201526064015b60405180910390fd5b83516002146103445760405162461bcd60e51b815260206004820152603260248201527f45787065637465642032206164646974696f6e616c20564141206b65797320666044820152716f7220746f6b656e207472616e736665727360701b60648201526084016102cf565b60008580602001905181019061035a919061153e565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9e11893876000815181106103a0576103a061155b565b60200260200101516040518263ffffffff1660e01b81526004016103c491906115c1565b600060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104099190810190611715565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632b5113758360e001516040518263ffffffff1660e01b815260040161045d91906115c1565b60e060405180830381865afa15801561047a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049e919061183a565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c6878519886000815181106104e2576104e261155b565b60200260200101516040518263ffffffff1660e01b815260040161050691906115c1565b600060405180830381600087803b15801561052057600080fd5b505af1158015610534573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9e118938960018151811061057c5761057c61155b565b60200260200101516040518263ffffffff1660e01b81526004016105a091906115c1565b600060405180830381865afa1580156105bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105e59190810190611715565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632b5113758360e001516040518263ffffffff1660e01b815260040161063991906115c1565b60e060405180830381865afa158015610656573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067a919061183a565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c68785198a6001815181106106be576106be61155b565b60200260200101516040518263ffffffff1660e01b81526004016106e291906115c1565b600060405180830381600087803b1580156106fc57600080fd5b505af1158015610710573d6000803e3d6000fd5b5050505061072087868584611086565b50505050505050505050565b60405163c23ee3c360e01b815261ffff8216600482015260006024820181905262057e406044830152907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c23ee3c3906064016040805180830381865afa1580156107a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ca91906118d4565b5092915050565b60606000805480602002602001604051908101604052809291908181526020016000905b828210156108675760008481526020908190206040805160a08101825260048602909201805461ffff811684526001600160a01b0362010000909104811684860152600180830154821693850193909352600282015416606084015260030154608083015290835290920191016107f5565b50505050905090565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156108c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e791906118f8565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820185905283169063095ea7b3906044016020604051808303816000875af1158015610957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097b91906118f8565b5060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630f5287b07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f919061191a565b85878a6001600160a01b038b166000806040518863ffffffff1660e01b8152600401610a6096959493929190611933565b60206040518083038185885af1158015610a7e573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610aa39190611970565b6040516323b872dd60e01b8152336004820152306024820152604481018690529091506001600160a01b038316906323b872dd906064016020604051808303816000875af1158015610af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1d91906118f8565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820186905283169063095ea7b3906044016020604051808303816000875af1158015610b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb191906118f8565b5060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630f5287b07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c65919061191a565b85888b6001600160a01b038c166000806040518863ffffffff1660e01b8152600401610c9696959493929190611933565b60206040518083038185885af1158015610cb4573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610cd99190611970565b6040805160028082526060820190925291925060009190816020015b6040805160608101825260008082526020808301829052928201528252600019909201910181610cf557905050905060405180606001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db1919061198b565b61ffff1681526020016001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020018467ffffffffffffffff1681525081600081518110610e0a57610e0a61155b565b602002602001018190525060405180606001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea2919061198b565b61ffff1681526020016001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020018367ffffffffffffffff1681525081600181518110610efb57610efb61155b565b60200260200101819052506000610f118961072c565b604080513360208201529192506000910160408051601f198184030181529082905263329a2be760e01b825291506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063329a2be7908490610f8e908e908e90879060009062057e40908c906004016119a8565b60206040518083038185885af1158015610fac573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610fd19190611970565b508134111561072057600033610fe78434611a5f565b604051600081818185875af1925050503d8060008114611023576040519150601f19603f3d011682016040523d82523d6000602084013e611028565b606091505b50509050806110795760405162461bcd60e51b815260206004820152601d60248201527f52657475726e696e67206578636573732066756e6473206661696c656400000060448201526064016102cf565b5050505050505050505050565b60006040518060a001604052808661ffff168152602001856001600160a01b031681526020016110b98560400151611187565b6001600160a01b031681526020016110d48460400151611187565b6001600160a01b0316815260200184602001516402540be4006110f79190611a78565b9052815460018181018455600093845260209384902083516004909302018054948401516001600160a01b0390811662010000026001600160b01b031990961661ffff90941693909317949094178455604083015190840180549183166001600160a01b031992831617905560608301516002850180549190931691161790556080015160039091015550505050565b600060a082901c156111af5760405163033b960d60e41b8152600481018390526024016102cf565b5090565b6000602082840312156111c557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611205576112056111cc565b60405290565b604051610160810167ffffffffffffffff81118282101715611205576112056111cc565b604051601f8201601f1916810167ffffffffffffffff81118282101715611258576112586111cc565b604052919050565b600067ffffffffffffffff82111561127a5761127a6111cc565b50601f01601f191660200190565b600082601f83011261129957600080fd5b81356112ac6112a782611260565b61122f565b8181528460208386010111156112c157600080fd5b816020850160208301376000918101602001919091529392505050565b600067ffffffffffffffff8211156112f8576112f86111cc565b5060051b60200190565b61ffff8116811461131257600080fd5b50565b803561132081611302565b919050565b600080600080600060a0868803121561133d57600080fd5b853567ffffffffffffffff8082111561135557600080fd5b61136189838a01611288565b965060209150818801358181111561137857600080fd5b8801601f81018a1361138957600080fd5b80356113976112a7826112de565b81815260059190911b8201840190848101908c8311156113b657600080fd5b8584015b838110156113ee578035868111156113d25760008081fd5b6113e08f8983890101611288565b8452509186019186016113ba565b5098505050506040880135945061140a91505060608701611315565b949793965091946080013592915050565b60006020828403121561142d57600080fd5b813561143881611302565b9392505050565b602080825282518282018190526000919060409081850190868401855b828110156114b4578151805161ffff168552868101516001600160a01b039081168887015286820151811687870152606080830151909116908601526080908101519085015260a0909301929085019060010161145c565b5091979650505050505050565b6001600160a01b038116811461131257600080fd5b600080600080600060a086880312156114ee57600080fd5b85356114f981611302565b94506020860135611509816114c1565b9350604086013592506060860135611520816114c1565b91506080860135611530816114c1565b809150509295509295909350565b60006020828403121561155057600080fd5b8151611438816114c1565b634e487b7160e01b600052603260045260246000fd5b60005b8381101561158c578181015183820152602001611574565b50506000910152565b600081518084526115ad816020860160208601611571565b601f01601f19169290920160200192915050565b6020815260006114386020830184611595565b805160ff8116811461132057600080fd5b805163ffffffff8116811461132057600080fd5b805161132081611302565b805167ffffffffffffffff8116811461132057600080fd5b600082601f83011261162d57600080fd5b815161163b6112a782611260565b81815284602083860101111561165057600080fd5b611661826020830160208701611571565b949350505050565b600082601f83011261167a57600080fd5b8151602061168a6112a7836112de565b82815260079290921b840181019181810190868411156116a957600080fd5b8286015b8481101561170a57608081890312156116c65760008081fd5b6116ce6111e2565b81518152848201518582015260406116e78184016115d4565b9082015260606116f88382016115d4565b908201528352918301916080016116ad565b509695505050505050565b60006020828403121561172757600080fd5b815167ffffffffffffffff8082111561173f57600080fd5b90830190610160828603121561175457600080fd5b61175c61120b565b611765836115d4565b8152611773602084016115e5565b6020820152611784604084016115e5565b6040820152611795606084016115f9565b6060820152608083015160808201526117b060a08401611604565b60a08201526117c160c084016115d4565b60c082015260e0830151828111156117d857600080fd5b6117e48782860161161c565b60e0830152506101006117f88185016115e5565b90820152610120838101518381111561181057600080fd5b61181c88828701611669565b91830191909152506101409283015192810192909252509392505050565b600060e0828403121561184c57600080fd5b60405160e0810181811067ffffffffffffffff8211171561186f5761186f6111cc565b60405261187b836115d4565b81526020830151602082015260408301516040820152606083015161189f81611302565b60608201526080838101519082015260a08301516118bc81611302565b60a082015260c0928301519281019290925250919050565b600080604083850312156118e757600080fd5b505080516020909101519092909150565b60006020828403121561190a57600080fd5b8151801515811461143857600080fd5b60006020828403121561192c57600080fd5b5051919050565b6001600160a01b03969096168652602086019490945261ffff9290921660408501526060840152608083015263ffffffff1660a082015260c00190565b60006020828403121561198257600080fd5b61143882611604565b60006020828403121561199d57600080fd5b815161143881611302565b600061ffff8089168352602060018060a01b03891681850152604060c0818601526119d660c086018a611595565b60608681018a90526080870189905286820360a088015287518083528489019285019060005b81811015611a35578451805189168452878101518885015286015167ffffffffffffffff168684015293860193918301916001016119fc565b50909e9d5050505050505050505050505050565b634e487b7160e01b600052601160045260246000fd5b81810381811115611a7257611a72611a49565b92915050565b8082028115828204841417611a7257611a72611a4956fea264697066735822122044a5fb7f446ce340cd49b20b9dcea55023d00bdb13776dce4bc2eda23daef65f64736f6c63430008130033";

type HelloTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloTokens__factory extends ContractFactory {
  constructor(...args: HelloTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wormholeRelayer: string,
    _tokenBridge: string,
    _wormhole: string,
    overrides?: Overrides & { from?: string }
  ): Promise<HelloTokens> {
    return super.deploy(
      _wormholeRelayer,
      _tokenBridge,
      _wormhole,
      overrides || {}
    ) as Promise<HelloTokens>;
  }
  override getDeployTransaction(
    _wormholeRelayer: string,
    _tokenBridge: string,
    _wormhole: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _wormholeRelayer,
      _tokenBridge,
      _wormhole,
      overrides || {}
    );
  }
  override attach(address: string): HelloTokens {
    return super.attach(address) as HelloTokens;
  }
  override connect(signer: Signer): HelloTokens__factory {
    return super.connect(signer) as HelloTokens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloTokensInterface {
    return new utils.Interface(_abi) as HelloTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloTokens {
    return new Contract(address, _abi, signerOrProvider) as HelloTokens;
  }
}
