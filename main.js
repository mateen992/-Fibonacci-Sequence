


class FibonacciSequence {
    
    printFirst10Digits() {

        let prev1= 0;
        let prev2= 1;

        console.log(prev1);
        for (let curr = 1; curr < 10; curr++) {

            console.log(prev2);

            const placeholder = prev2 + prev1;
            prev1 = prev2;
            prev2 = placeholder;
        }
    }    
}

let fib = new FibonacciSequence();

fib.printFirst10Digits();