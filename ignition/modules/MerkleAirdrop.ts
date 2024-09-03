import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const merkleRoot = "";
  const erc20TokenAddress = "";

  const MerkleAirdropModule = m.contract("MerkleAirdrop", [merkleRoot, erc20TokenAddress]);

  return { MerkleAirdropModule };
});

export default MerkleAirdropModule;

