import supabase from './supabase.js';

export async function fetchShowcaseProduct() {
  const { data, error } = await supabase
    .from('products')
    .select(`*, categories(category_name)`)
    .eq('showcase', true)
    .limit(8);

  if (error)
    throw new Error(
      error.message || 'Error fetching data for showcase try again'
    );

  return data;
}
export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`*, categories(category_name)`);

  if (error)
    throw new Error(
      error.message || 'Error fetching data for showcase try again'
    );

  return data;
}

export async function getCategories() {
  const { data, error } = await supabase.from('categories').select('*');

  if (error)
    throw new Error(
      error.message || 'Error fetching data for categories try again'
    );

  return data;
}

export async function fetchCartItems() {
  const { data, error } = await supabase.from('cart').select(`*, products(*)`);

  if (error) throw new Error(error.message || 'Error Getting Cart Items');

  return data;
}
