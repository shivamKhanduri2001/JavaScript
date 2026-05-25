const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const correctUsername = 'admin';
const correctPassword = '1234';
let attempts = 3;

function askContinue(){
    rl.question('Do you want to continue (y/n): ', function(answer){
        if( answer === 'y'){
            askUsername();
        } else {
            askContinue();
        }
    })
}

function askUsername(){
    process.stdout.write('\x1Bc');
    rl.question("Enter you username: ", function(inputUsername){
        rl.question('Enter you password: ', function(inputPassword){
            if( inputUsername === correctUsername && inputPassword === correctPassword ){
                console.log('Login Successful, Welcome Admin.');
                rl.close();
            } else {
                attempts--;
                
                if (attempts > 0){
                    console.log(`Invalid Credentials, You have ${attempts} attempts left.\n`)
                    askContinue();
                } else {
                    console.log('Account locked, Program Stopped.');
                    rl.close();
                }
            };
        }
    )}
)};

askUsername();
