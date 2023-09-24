function bankAccout(accountNum,initBalance){
    let _balance = initBalance

    let _isammountValid = function(ammount){
        return typeof ammount ==='number' && ammount > 0 
    }

    this.deposit = function(amount){
        if(_isammountValid(amount)){
            _balance = amount
            console.log("deposit success, new balance is " + _balance)
        }
        else{
            console.log("invalid ammount");
        }
    }
    this.getBalance = function(){
        return _balance
    }
}