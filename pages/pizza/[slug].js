import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, {Toaster} from "react-hot-toast";


export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [Size, setSize] = useState(0);
  const [Quantity, setQuantity] = useState(1);
    // Handle Quantity
    const handleQuantity = (type)=>{
        type === "incr"
          ? setQuantity((prev) => prev + 1)
          : Quantity === 1
          ? null
          : setQuantity((prev) => prev - 1);
    }
    // add to cart 
    const addPizza = useStore((state)=> state.addPizza);
    const addToCart = ()=>{
      addPizza({...pizza, price: pizza.price[Size], quantity: Quantity, size: Size});
      toast.success("Pizza Added to Cart")
    }
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </div>
        {/* right side  sizes and cart addition*/}
        <div className={css.rightSide}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>₹</span>{" "}
            {pizza.price[Size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.diffSizes}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                Regular
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>
          {/* Quantity count*/}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                alt="LeftArrow"
                objectFit="contain"
                height={20}
                width={20}
                onClick={() => handleQuantity("dec")}
              />
              <span>{Quantity}</span>
              <Image
                src={RightArrow}
                alt="LeftArrow"
                objectFit="contain"
                height={20}
                width={20}
                onClick={() => handleQuantity("incr")}
              />
            </div>
          </div>
          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Add to Cart
          </div>
        </div>
        <Toaster/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const query = '*[_type == "pizza" && defined(slug.current)][].slug.current';
  const paths = await client.fetch(query);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type == "pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
