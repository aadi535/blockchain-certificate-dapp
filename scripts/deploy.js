async function main() {
  const Certificate = await ethers.getContractFactory("Certificate");
  const cert = await Certificate.deploy();

  await cert.deployed();

  console.log("Contract deployed to:", cert.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });