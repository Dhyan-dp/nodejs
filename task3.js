for (let outer = 1; outer <= 3; outer++) {
    for (let inner = 1; inner <= 5; inner++) {
        console.log(`Outer: ${outer}, Inner: ${inner}`);
        
        if (inner === outer) {
            break;
        }
    }
}
