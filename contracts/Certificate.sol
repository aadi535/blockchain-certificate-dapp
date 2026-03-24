// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    struct Cert {
        string studentName;
        string course;
        string hash;
        bool isValid;
    }

    mapping(string => Cert) public certificates;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function addCertificate(
        string memory _id,
        string memory _name,
        string memory _course,
        string memory _hash
    ) public onlyAdmin {
        certificates[_id] = Cert(_name, _course, _hash, true);
    }

    function verifyCertificate(string memory _id) public view returns (bool) {
        return certificates[_id].isValid;
    }

    function revokeCertificate(string memory _id) public onlyAdmin {
        certificates[_id].isValid = false;
    }
}