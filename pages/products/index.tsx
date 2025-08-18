import BestProductList from "./feature/BestProductList";
import ProductList from "./feature/ProductList";
import {
  BEST_PRODUCTS_TITLE,
  ALL_PRODUCTS_TITLE,
  BREAKPOINTS,
  BEST_PRODUCTS_PAGESIZE,
  ALL_PRODUCTS_PAGESIZE,
} from "@/constants";
import useWindowWidth from "@/hooks/useWindowDimension";

const ProductsPage = () => {
  const innerWidth = useWindowWidth();

  return (
    <>
      <BestProductList
        title={BEST_PRODUCTS_TITLE}
        pageSize={
          innerWidth >= BREAKPOINTS.lg
            ? BEST_PRODUCTS_PAGESIZE.lg
            : innerWidth >= BREAKPOINTS.md
            ? BEST_PRODUCTS_PAGESIZE.md
            : BEST_PRODUCTS_PAGESIZE.sm
        }
      />
      <ProductList
        title={ALL_PRODUCTS_TITLE}
        pageSize={
          innerWidth >= BREAKPOINTS.lg
            ? ALL_PRODUCTS_PAGESIZE.lg
            : innerWidth >= BREAKPOINTS.md
            ? ALL_PRODUCTS_PAGESIZE.md
            : ALL_PRODUCTS_PAGESIZE.sm
        }
      />
    </>
  );
};

export default ProductsPage;
