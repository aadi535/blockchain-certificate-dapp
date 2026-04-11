let contract;

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
  "function addCertificate(string,string,string,string)",
  "function verifyCertificate(string) view returns (bool)",
  "function getCertificate(string) view returns (string,string)",
  "function revokeCertificate(string)"
];

// CONNECTING WALLET HERE
async function connect() {
  if (!window.ethereum) {
    alert("MetaMask not detected");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  contract = new ethers.Contract(contractAddress, abi, signer);
}

// ADDING THE CERTIFICATE
async function addCert() {
  await connect();

  const id = document.getElementById("id").value.trim();
  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value.trim();

  if (!id || !name || !course) {
    alert("❌ Please fill all fields!");
    return;
  }

  try {
    const data = id + name + course;
    const hash = CryptoJS.SHA256(data).toString();

    const tx = await contract.addCertificate(id, name, course, hash);
    await tx.wait();

    QRCode.toCanvas(document.getElementById("qrcode"), id);

    alert("✅ Certificate Added Successfully!");
  } catch (err) {
    alert("❌ Transaction failed");
  }
}

// VERIFYING THE CERTIFICATE
async function verifyCert() {
  await connect();

  const id = document.getElementById("verifyId").value.trim();

  if (!id) {
    alert("❌ Enter certificate ID!");
    return;
  }

  try {
    const result = await contract.verifyCertificate(id);
    const body = document.body;

    if (result) {
      const data = await contract.getCertificate(id);

      document.getElementById("result").innerText =
        `✅ Valid Certificate\nName: ${data[0]}\nCourse: ${data[1]}`;

      body.classList.add("success");
    } else {
      document.getElementById("result").innerText = "Invalid Certificate ❌";
      body.classList.add("fail");
    }

    setTimeout(() => {
      body.classList.remove("success");
      body.classList.remove("fail");
    }, 1500);

  } catch (err) {
    alert("❌ Error verifying certificate");
  }
}

// QR SIMULATION FEATURED
function scanQR() {
  const id = prompt("Enter scanned QR value:");
  document.getElementById("verifyId").value = id;
}