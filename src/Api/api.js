
export async function getProducts() {
    const productsUrl = 'https://dummyjson.com/products';
  
    try {
      const response = await fetch(productsUrl);
  
      if (!response.ok) {
        throw new Error('Error');
      }
  
      const data = await response.json();
      console.log('Data from API:', data); // Lägg till denna loggning
  
      return data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }
  
