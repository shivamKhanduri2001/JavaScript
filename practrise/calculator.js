const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function askNumber(){
    rl.question('Please enter an number: ', function(answer){
        let A = parseInt(answer);
        if(isNaN(answer)){
            console.log('Invalid input, please enter a number.');
            askNumber();
        } else {
            rl.question('Please enter another number: ', function(answer){
                let B = parseInt(answer);
                if(isNaN(answer)){
                console.log('Invalid input, please enter a number.');
                askNumber();
                } else {
                    operatorNumbers(A,B);
                }
            });
        };
    });
};

function operatorNumbers(A,B){
    rl.question('Choose an operator (+, -, *, /): ',function(answer){
        if (answer === '+'){
            console.log(`Sum of ${A}+${B} = ${A+B}`);
        } else if (answer === '-'){
            console.log(`Substraction of ${A}-${B} = ${A-B}`);
        } else if (answer === '*'){
            console.log(`Multiplication of ${A}*${B} = ${A*B}`);
        } else if (answer === '/' ){
            if ( B===0){ console.log('Cannot divide by 0');
            } else {
            console.log(`Division of ${A}/${B} = ${A/B}`)};
        } else {
            operatorNumbers(A,B);
        } askContinue(A,B);
    }); 
};

function askContinue(A,B){
    rl.question('Do you want to continue? (y/n): ', function(answer){
        if( answer === 'y'){
            process.stdout.write('\x1Bc');
            askNumber();
        } if (answer === 'n'){
            console.log('GoodBye!');
            rl.close();
        } else {
            askContinue(A,B);
        }
    })
}

askNumber();
