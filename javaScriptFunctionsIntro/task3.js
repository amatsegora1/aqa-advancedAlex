function checkOrder(available, ordered) {

    if (ordered <= 0) {
        return 'Your order is empty';
    }
    else if (ordered > available) {
        return 'Your order is too large, we dont have enough goods.';
    }
    else {
        return 'Your order is accepted';
    }
}

console.log(checkOrder(3, -2));