import { ethers } from "hardhat";

async function main() {
    const GuzbyteTokenAddress = "";
    const GTK = await ethers.getContractAt("IERC20", GuzbyteTokenAddress);

    const airDropContractAddress = "";
    const airdropWithMerkleTree = await ethers.getContractAt("MerkleAirdrop", airDropContractAddress);

    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await GTK.approve(airdropWithMerkleTree, approvalAmount);
    approveTx.wait();



    //Claim Reward
    const userAddress = "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB";
    const amountToClaim = ethers.parseUnits("10", 18);
    const proof = ["0x81ddb8944bc5301d8d414f58ac4d74939d9608494a6e08b9dfb05cffc652900a","0xa8b1917ae6f19ba060838edf873a973f07e441530dadf027f0aa0d1026d05873","0x89b2c78d9f90a5ba1b0a1abd914ce4dc82ed99359ad86e2b50e64d0b9211ad36"];
    const roothash = "0xdd8b463cdc12388c8a93b3dd9ea70e9d121347210ca1f691f5a32e3b24f7a703"
    const claimReward = await airdropWithMerkleTree.claimAirdrop(userAddress, amountToClaim, proof);

    console.log(claimReward);


    
    
    

    

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
