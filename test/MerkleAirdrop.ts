import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import hre, { ethers } from "hardhat";

  describe("MerkleAirdrop", function(){
    async function deployToken() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.ethers.getSigners();
    
        const erc20Token = await hre.ethers.getContractFactory("GTK");
        const token = await erc20Token.deploy();
    
        return { token };
      }

      async function deployMerkleAirdrop() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.ethers.getSigners();
    
        const { token } = await loadFixture(deployToken)

        const merkleRootHash = "";
    
        const merkleairdrop = await hre.ethers.getContractFactory("MerkleAirdrop");
        const MerkleAirdrop = await merkleairdrop.deploy(token, merkleRootHash);
    
        return { MerkleAirdrop, merkleRootHash, token };
      }

      describe("Delployment", function(){
        it("Should check if Erc20 tolen adddress is set correctly", async function(){
            const { MerkleAirdrop, merkleRootHash, token } = await loadFixture(deployMerkleAirdrop);
            expect(await token.token()).to.equal(token);
        });
      });


  });