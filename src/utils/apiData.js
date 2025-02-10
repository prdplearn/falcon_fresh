const ApiData = async (setProduct) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { products } = await response.json();
        setProduct(products)
        return products; // Return only the products array
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return []; // Return an empty array in case of an error
    }
};

export default ApiData;
