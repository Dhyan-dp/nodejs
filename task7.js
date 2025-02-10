function scopeTest() {
    if (true) {
        var functionScoped = 'I am var'; // Function-scoped
        let blockScoped = 'I am let'; // Block-scoped
        // console.log(blockScoped);
    }
    
    console.log(functionScoped);  //var is function-scoped
    // console.log(blockScoped); // Error
}


scopeTest();
