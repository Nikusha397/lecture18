// Switch , prompt , Number - გამოყენებით, დავწეროთ კოდი, 
// კოდი იწყება 3 შეკითხვით(prompt): 
// 1. Enter your age: 
// 2. Enter movie type (regular or 3D):
// 3. Enter time of day (matinee or evening):

// თუ მომხმარებელი 10-წელზე ნაკლების არის ticket-ის ფასი იქნება 5 ლარი, 
// თუ მომხმარებელი 10-წლიდან 65-წლამდე არის ticket-ის ფასი იქნება 15 ლარი,
// თუ მომხარებელი 65+ წლის არის ticket-ის ფასი იქნება 10 ლარი,  

// ასევე 3D ფილს თუ აირჩევს მომხმარებელი ფასს ემატება 5 ლარი.
// თუ საღამოს სიანსია ასევე ემატება 5 ლარი.

// საბოლოოდ უნდა დაგვიწეროს კოდმა ასეთი რამ :  ბილეთის ფასი თქვენთვის არის : 25 ლარი. 
// Bonus დავალება, switch case-ის დავამატოთ if ფუნქციონალი, რომელიც შეამოწმებს თუ გვაქვს ფასდაკლების ბილეთი,
// თუ ფასდაკლების ბილეთი გვაქვს ფასს დააკლდეს 25% ან უბრალოდ 5 ლარი.

// წარმატებები 🚀

const btn = document.getElementById("btn");

function ticketGe() {

    let age = Number(prompt("შეიყვანეთ ასაკი"));
    let movieType = prompt ("2დ or 3დ")
    let timeOfDay = prompt ("დილა თუ საღამო")
    let discount = prompt ("გთხოვთ შეიყვანოთ პრომოკოდი (კი / არა)")
    let price;

    switch (true) {
        case age <= 10:
            price = 5;
            break;

        case age >= 10 && age <= 65:
            price = 15;
            break;

        case age > 65:
            price = 10;
            break;

        default:
            price = "მონაცემი არასწორია";
    }

    switch (movieType) {
        case "3დ":
            price += 5
            break;
        case "2დ":
            break;
    
        default:"ასეთი სეანსი არ მოიძებნა"
            break;
    }

    switch (timeOfDay) {
        case "დილა":
            break;
        case "საღამო":
            price += 5
    
        default:
            break;
    }


   switch (discount) {
    case "კი":
        if (discount === "კი") {
            price -= 5;
        } else {
            alert("თქვენ არ გაქვთ ფასდაკლება");
        }
        break;

    case "არა":
        alert("თქვენ არ გაქვთ ფასდაკლება");
        break;

    default:
        alert("ასეთ პრომოკოდი არარსებობს");
        break;
}



    prompt ("ბილეთის ფასი არის: " + price + "ლარი")

    console.log("Age:", age);
    console.log("Movie Type:", movieType);
    console.log("Time:", timeOfDay);
    console.log("Ticket Price:", price + "₾");
    console.log("Discount:", discount);
    
}

btn.addEventListener("click", ticketGe);




