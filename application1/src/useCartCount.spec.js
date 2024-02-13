import { renderHook, act } from "@testing-libbrary/react-hooks";

import { useCartCount } from "./useCartCount";

jestConfig.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: jest.fn(),
  },
}));

describe("useCartCount", () => {
  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });
});
