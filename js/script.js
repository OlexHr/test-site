function calculate(){
    let a = 5, b = 6;
    function calculateInner(){
        let b = 10, c = 12;
        a += b+c;
    };
    calculateInner();
    console.log ('a = ', a, ';b = ', b);
}
calculate();