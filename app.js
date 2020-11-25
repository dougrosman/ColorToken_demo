ethereum.autoRefreshOnNetworkChange = false;

ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
const contractAddress = "0xb571B3ea89bDF2FBCf08E737432730C7e7ceD798";
const contractABI = [
  "function awardItem(address player, uint256 tokenId) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
  "function totalSupply() public view returns (uint256)",
  "function tokenByIndex(uint256 index) public view returns (uint256)",
  "function safeTransferFrom(address from, address to, uint256 tokenId) public"
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

// Global Variables
let address;
let totalSupply;
let existingTokens = []; // every single color token that has been minted
let signerTokens = []; // every color token owned by the signer



