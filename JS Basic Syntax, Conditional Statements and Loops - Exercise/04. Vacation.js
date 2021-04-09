function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
   let singlePrice = 0;
   let totalPrice = 0;
   
   
    if (typeOfTheGroup === 'Students') {
        if (dayOfTheWeek === 'Friday') {
            singlePrice = 8.45;
        } else if ( dayOfTheWeek === 'Saturday') {
            singlePrice = 9.80;
        } else if (dayOfTheWeek === 'Sunday') {
            singlePrice = 10.46;
        }

    } else if (typeOfTheGroup === 'Business') {
        if (dayOfTheWeek === 'Friday') {
            singlePrice = 10.90;
        } else if ( dayOfTheWeek === 'Saturday') {
            singlePrice = 15.60;
        } else if (dayOfTheWeek === 'Sunday') {
            singlePrice = 16;
        }
    } else if (typeOfTheGroup === 'Regular') {
        if (dayOfTheWeek === 'Friday') {
            singlePrice = 15;
        } else if ( dayOfTheWeek === 'Saturday') {
            singlePrice = 20;
        } else if (dayOfTheWeek === 'Sunday') {
            singlePrice = 22.50;
        }
    }
    totalPrice = singlePrice * groupOfPeople;

    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
        
        totalPrice = totalPrice - (10 * singlePrice);
    } else if (typeOfTheGroup === 'Regular' && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        totalPrice = totalPrice * 0.95;
    }

   
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    

}

vacation (30,
    "Students",
    "Sunday"
    );
vacation (40,
    "Regular",
    "Saturday"
    );