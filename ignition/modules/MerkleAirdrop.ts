import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const merkleRoot = "0xdd8b463cdc12388c8a93b3dd9ea70e9d121347210ca1f691f5a32e3b24f7a703";
  const erc20TokenAddress = "0x4b3c0dF2Fd4f32b38120dCCc89a4E96f2B215959";

  // Deploy the MerkleAirdrop contract
  const merkleAirdrop = m.contract("MerkleAirdrop", [erc20TokenAddress, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;
