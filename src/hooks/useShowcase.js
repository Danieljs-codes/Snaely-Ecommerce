import { useQuery } from "@tanstack/react-query";
import { fetchShowcaseProduct, getCategories } from "../services/apiProduct.js";

export function useShowcase() {
  const {
    isLoading,
    data: showcase,
    error,
  } = useQuery({
    queryKey: ["showcaseProduct"],
    queryFn: fetchShowcaseProduct,
  });

  if (error) throw new Error("Failed to fetch showcase products");

  return {
    isLoading,
    showcase,
  };
}

export function useShowcaseFilters() {
  const {
    isLoading,
    error,
    data: showcaseFilter,
  } = useQuery({
    queryKey: ["showcaseFilter"],
    queryFn: getCategories,
  });

  if (error) throw new Error("Failed to fetch showcase filters");

  return {
    isLoading,
    showcaseFilter,
  };
}
