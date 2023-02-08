import Image from "next/image";
import { useStore } from "../store/store";
import { urlFor } from "../lib/client";
import { UilTrashAlt } from "@iconscout/react-unicons";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import toast, { Toaster } from "react-hot-toast";
import {useState} from 'react';
import OrderModal from "../components/OrderModal";

export default function Cart() {
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [PaymentMethod, setPaymentMethod] = useState(null);

  const deleteItem = (id) => {
    removePizza(id);
    toast.error("Item Removed");
  };

  const total = () => cartData.pizzas.reduce((a,b) => a + b.quantity * b.price, 0);

  const handlePayOnDelivery =()=>{
    setPaymentMethod("pod");
    typeof window !== "undefined" && localStorage.setItem("TotalAmount", total());
  }

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {cartData.pizzas.length > 0 &&
                cartData.pizzas.map((pizza, id) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={id}>
                      <td className={css.imageTd}>
                        {" "}
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                        />
                      </td>
                      <td>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Regular"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
                      <td
                        className={css.iconDelete}
                        onClick={() => deleteItem(id)}
                      >
                        <UilTrashAlt size={20} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Items:</span>
              <span>{cartData.pizzas.reduce((a, b) => a + b.quantity, 0)}</span>
            </div>
            <div>
              <span>Total:</span>
              <span>₹ {total()}</span>
            </div>
          </div>

          <div className={css.btns}
          onClick={handlePayOnDelivery}
          >
            <button className="btn">Pay on Delivery</button>
            <button className="btn">Pay Now</button>
          </div>
        </div>
      </div>
      <Toaster />
      {/* Pay Modal Via Mantine */}
      <OrderModal
      opened = {PaymentMethod === "pod"}
      setOpenedState = {setPaymentMethod}
      PaymentMethod = {PaymentMethod}
      />
    </Layout>
  );
}
