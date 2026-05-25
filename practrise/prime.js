const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function isPrime(num){
    if(num <= 1) return false;
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
        return true;
    };
};

function askNumber(){
    rl.question('Please enter a number: ', function(answer){
        let num = parseInt(answer);
        if (isNaN(num)){
            console.log('Invalid Input')
            askNumber()
        } else if (isPrime(num)) {
            console.log('It is a prime number.');
            askContinue();
        } else {
            console.log(`${num} is not a prime number`);
            askContinue()
        }
         
    });
}
function askContinue(){
    rl.question('Do you want to continue? (y/n): ', function(answer){
        if( answer === 'y'){
            process.stdout.write('\x1Bc');
            askNumber();
        } else if (answer === 'n'){
            console.log('GoodBye!');
            rl.close();
        } else {
            askContinue();
        }
    });
};

askNumber();
