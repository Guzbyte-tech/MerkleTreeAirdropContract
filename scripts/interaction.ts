import { ethers } from "hardhat";

async function main() {
    const GuzbyteTokenAddress = "0x4b3c0dF2Fd4f32b38120dCCc89a4E96f2B215959";
    const GTK = await ethers.getContractAt("IERC20", GuzbyteTokenAddress);
    const airDropContractAddress = "0xF519C20fe7AB9787fEA6A84e88a19638Cd7f8253";
    const airdropWithMerkleTree = await ethers.getContractAt("MerkleAirdrop", airDropContractAddress);

    
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await GTK.approve(airdropWithMerkleTree, approvalAmount);
    approveTx.wait();

    const token = await airdropWithMerkleTree.token();
    console.log("This contract supports the token with address:", token);



    // Claim Reward
    const userAddress = "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB";
    const amountToClaim = ethers.parseUnits("10", 18);
    // const proof = ["0x81ddb8944bc5301d8d414f58ac4d74939d9608494a6e08b9dfb05cffc652900a","0xa8b1917ae6f19ba060838edf873a973f07e441530dadf027f0aa0d1026d05873","0x89b2c78d9f90a5ba1b0a1abd914ce4dc82ed99359ad86e2b50e64d0b9211ad36"];
    
    
      
      // Example usage
      const proof: string[] = [
        "0x81ddb8944bc5301d8d414f58ac4d74939d9608494a6e08b9dfb05cffc652900a",
        "0xa8b1917ae6f19ba060838edf873a973f07e441530dadf027f0aa0d1026d05873",
        "0x89b2c78d9f90a5ba1b0a1abd914ce4dc82ed99359ad86e2b50e64d0b9211ad36"
      ];
      
      // Ensure each proof element is 32 bytes
      const bytes32Proof: string[] = proof.map(padToBytes32);

    // const roothash = "0xdd8b463cdc12388c8a93b3dd9ea70e9d121347210ca1f691f5a32e3b24f7a703";
    const claimReward = await airdropWithMerkleTree.claimAirdrop(userAddress, amountToClaim, bytes32Proof);

    console.log(claimReward)


    
    
    

    

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// Function to manually pad the hex string to 32 bytes
function padToBytes32(hexString: string): string {
    if (hexString.startsWith("0x")) {
      hexString = hexString.slice(2); // Remove '0x' prefix
    }
  
    // Pad the hex string with zeros to make it 64 characters long (32 bytes)
    return "0x" + hexString.padStart(64, '0');
  }