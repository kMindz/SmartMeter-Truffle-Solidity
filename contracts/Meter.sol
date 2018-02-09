pragma solidity ^0.4.4;


contract Meter {

  uint private balance;
  uint private counter;

    struct Transactions { // Struct
        uint amount;
        string by_name;
        address by_address;
        uint when;
    }

    mapping(uint => Transactions) transactionList; 

  // Whenever a high bid is received
  event EventRechargeDone(uint indexed balance);

  function Meter() public {
    // constructor
    balance = 0;
    counter = 0;

    recharge(1, "Mustafa");
    recharge(1, "Husain");
    recharge(1, "Akhtar");
    recharge(1, "Arif");
    recharge(1, "Fazal");
  }

  // returns the result
  function getBalance() public constant returns (uint) {
    return balance;
  }

  // returns the result
  function getLastTransaction() public constant returns (uint amount, string name, uint when) {
    uint index = counter-1;
    return (transactionList[index].amount, transactionList[index].by_name, transactionList[index].when) ;
  }

  // returns the result
  function getLast1Transaction() public constant returns (uint amount, string name, uint when) {
    uint index = counter-2;
    return (transactionList[index].amount, transactionList[index].by_name, transactionList[index].when) ;
  }

  // returns the result
  function getLast2Transaction() public constant returns (uint amount, string name, uint when) {
    uint index = counter-3;
    return (transactionList[index].amount,transactionList[index].by_name, transactionList[index].when) ;
  }

  // returns the result
  function getLast3Transaction() public constant returns (uint amount, string name, uint when) {
    uint index = counter-4;
    return (transactionList[index].amount, transactionList[index].by_name, transactionList[index].when) ;
  }

  // returns the result
  function getLast4Transaction() public constant returns (uint amount, string name, uint when) {
    uint index = counter-5;
    return (transactionList[index].amount, transactionList[index].by_name, transactionList[index].when) ;
  }

  function recharge(uint amt, string name) public {
    balance += amt;
    transactionList[counter].amount = amt;
    transactionList[counter].by_name = name;
    transactionList[counter].by_address = msg.sender;
    transactionList[counter].when = now;
    counter++;

    EventRechargeDone(balance);
  }
}