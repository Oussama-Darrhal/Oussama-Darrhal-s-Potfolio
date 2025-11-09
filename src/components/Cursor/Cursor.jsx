import { useState } from "react"
import "./Cursor.scss"
import { useEffect } from "react"
import { motion } from "framer-motion"

export const Cursor = () => {
    const [position, SetPosition] = useState({x:0, y:0})
    useEffect (() => {
        const mouseMove = (e) => {
            SetPosition({x:e.clientX,y:e.clientY})
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    return (
        <motion.div className="Cursor" animate={{x:position.x, y:position.y}}></motion.div>
    )
}