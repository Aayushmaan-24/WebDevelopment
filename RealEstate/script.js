import  properties from "./properties/propertyForSale.js";
import  placeHolderProperty from "./properties/placeHolder.js"

function getPropertyHTML(properties = [placeHolderProperty]) {

    return properties.map(property => {
        const {property_location, property_price, size, image, comment} = property;
        const totalSize = size.reduce((total, room) => total+room, 0);
        return `
        <div class="property-card">
        <img src="images/${image}">
        <h2>${property_location}</h2>
        <h2>Price: $${property_price}</p>
        <h2>Total Size in sq m: ${totalSize}</p>
        <p>${comment}</p>
        </div>`
    }).join('');

}
document.getElementById('property-listings').innerHTML = getPropertyHTML(properties);