import { motion } from "framer-motion"
import { useLanguage } from "../../../../hooks/useLanguage"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.3,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
}

export const Links = ({setOpen}) => {
    const { t } = useLanguage();
    const items = [
        { id: "HomePage", labelKey: "sidebar.home" },
        { id: "Services", labelKey: "sidebar.services" },
        { id: "Portfolio", labelKey: "sidebar.portfolio" },
        { id: "Contact", labelKey: "sidebar.contact" },
    ]

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item=>(
                <motion.a onClick={() => setOpen((prev) => !prev)} href={`#${item.id}`} key={item.id} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{t(item.labelKey)}</motion.a>
            ))}
        </motion.div>
    )
}
