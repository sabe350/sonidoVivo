import { createContext, useContext, ReactNode, useState } from "react";
import { Cart } from "../components/Cart_new";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (id: string) => void
    decreaseCartQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    addToCart: (id: string, quantity: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: string
    quantity: number
}

const CartContext = createContext({} as CartContext)

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("carrito-de-compras", [])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((q, item) => item.quantity + q, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        })
    }

    function decreaseCartQuantity(id: string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            }
        })
    }

    function removeFromCart(id: string) {
        setCartItems(currentItems => currentItems.filter(item => item.id !== id))
    }

    function addToCart(id: string, quantity: number){
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity}]
            }
            return currentItems.map(item => 
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            )
        })
    }

    return (
        <CartContext.Provider value={{
            openCart, closeCart, getItemQuantity,
            increaseCartQuantity, decreaseCartQuantity,
            removeFromCart, addToCart, cartQuantity, cartItems
        }}>
            {children}
            <Cart isOpen={isOpen} />
        </CartContext.Provider>
    )
}