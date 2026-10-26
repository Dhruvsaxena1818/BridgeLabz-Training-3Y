let productName = " wireless headphones PRO ";

let cleanedTitle = productName.trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log(cleanedTitle);
console.log(cleanedTitle.length);