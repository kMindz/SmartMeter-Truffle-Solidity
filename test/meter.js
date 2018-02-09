var Meter = artifacts.require("./Meter.sol");

contract('Meter', function(accounts) {


  // Test Case#1
  it("Last Transactions", function() {
    var meter;
    return Meter.deployed().then(function(instance){
      meter = instance;
      return meter.getLastTransaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Fazal', "Last transaction name is Fazal");

      return meter.getLast1Transaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Arif', "Last transaction name is Mustafa");

      return meter.getLast2Transaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Akhtar', "Last transaction name is Mustafa");
    });
  });
  
  // Expected behavior - result is initialized to 10
  // Test Case#1
  it("should assert true", function() {
    var meter;
    return Meter.deployed().then(function(instance){
      meter = instance;
      return meter.getBalance.call();
    }).then(function (result) {
      assert.equal(result.valueOf(), 5, "Contract initialized with value NOT equal to 10!!!");
    });
  });

  // Test case#2 Checks if calls to add/subtract for ((Initial_Value + 10) - 5) = 15
  it("should add 10 and then substract 5 to get a result=15", function () {
    // Get the deployed instance
    var meter;
    
    return Meter.deployed().then(function(instance){
      meter = instance;
      return meter.recharge(10, "Mustafa");
    }).then(function (events) {

      assert.equal(events.logs[0].event, 'EventRechargeDone');
      assert.equal(events.logs[0].args.balance.valueOf(), 15, "Result after recharge by 20$ balance should be 20");
      
      return meter.getBalance.call();
    }).then(function (result) {
      assert.equal(result.valueOf(), 15, "Result after recharge by 10$ balance should be 20");
      // Now substract 10
      return meter.getLastTransaction.call();
    }).then(function (result) {
      //console.log(result);

      assert.equal(result[0].toNumber(), 10, "Last transaction should be 10$");
      assert.equal(result[1], 'Mustafa', "Last transaction name is Mustafa");
    });
  });



  // Test Case#1
  it("Last Transactions", function() {
    var meter;
    return Meter.deployed().then(function(instance){
      meter = instance;
      return meter.getLastTransaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 10, "Last transaction should be 1$");
      assert.equal(result[1], 'Mustafa', "Last transaction name is Fazal");

      return meter.getLast1Transaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Fazal', "Last transaction name is Fazal");

      return meter.getLast2Transaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Arif', "Last transaction name is Mustafa");

      return meter.getLast3Transaction.call();
    }).then(function (result) {
      assert.equal(result[0].toNumber(), 1, "Last transaction should be 1$");
      assert.equal(result[1], 'Akhtar', "Last transaction name is Mustafa");
    });
  });
  
  // Add Test Case#3 here
  // Add Test Case#4 here
});