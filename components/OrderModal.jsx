import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import css from '../styles/OrderModal.module.css'

export default function OrderModal ({ opened, setOpenedState, PaymentMethod }) {
    const theme = useMantineTheme();
    const totalAmount = typeof window !== "undefined" && localStorage.getItem("TotalAmount");
    const [FormData, setFormData] = useState({})
    const handleInput = (e)=>{
        setFormData({...FormData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(FormData)
    }
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpenedState(null)}
        >
            {/* Modal content */}
            <form onSubmit={handleSubmit} className={css.formContent}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Name" />
                <input onChange={handleInput} type="number" name="phone" required inputMode="numeric" placeholder="Phone Number" />
                <input onChange={handleInput} type="email" name="email" required placeholder="Email Address" />
                <textarea onChange={handleInput} name="address" rows={5} placeholder="Address" ></textarea>
                <span>You will pay <span>₹ {totalAmount}</span> on Delivery</span>
                <button type="submit" className="btn">Place Order</button>
            </form>
        </Modal>
    )
};