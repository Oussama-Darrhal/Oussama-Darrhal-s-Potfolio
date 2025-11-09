import { useState } from "react"
import { Links } from "./Links/Links"
import "./SideBar.scss"
import { Togglebutton } from "./togglebutton/Togglebutton"
import { motion } from "framer-motion"

export const SideBar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type:"spring",
                stiffness:15,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay:0.4,
                type:"spring",
                stiffness:400,
                damping:40,
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links setOpen={setOpen} />
            </motion.div>
            <Togglebutton setOpen={setOpen} />
        </motion.div>
    )
}