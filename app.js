if(ethereum) {
  ethereum.autoRefreshOnNetworkChange = false;
  ethereum.enable();
} else {
  alert("You need a MetaMask account to experience this site.")
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
const contractAddress = "0xb571B3ea89bDF2FBCf08E737432730C7e7ceD798";
const contractABI = [
  "function awardItem(address player, uint256 tokenId) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
  "function totalSupply() public view returns (uint256)",
  "function tokenByIndex(uint256 index) public view returns (uint256)",
  "function safeTransferFrom(address from, address to, uint256 tokenId) public",
  "function ownerOf(uint256 tokenId) public view returns (address)"
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

// Global Variables
let address;
let totalSupply;
let existingTokens = []; // every single color token that has been minted
let signerTokens = []; // every color token owned by the signer


main();

async function main() {

  address = await signer.getAddress();
  console.log(address);

  totalSupply = await contract.totalSupply();
  console.log(totalSupply);

  let tokenNumberOne = await contract.tokenByIndex(0);
  tokenNumberOne = +tokenNumberOne
  console.log(tokenNumberOne);

  let ownerOfTokenOne = await contract.ownerOf(tokenNumberOne);
  console.log(ownerOfTokenOne);

  let myBalance = await contract.balanceOf(address);
  myBalance = +myBalance;
  console.log(myBalance);
}




