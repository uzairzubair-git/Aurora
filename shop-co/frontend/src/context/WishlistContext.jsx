import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((previousWishlist) => {
      const exists = previousWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return previousWishlist;
      }

      return [...previousWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}