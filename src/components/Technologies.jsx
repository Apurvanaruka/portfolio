import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                id='technologies'
                className="my-20 text-center text-4xl">
                Technologies
            </ motion.h2 >

            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-900 p-4">
                    < FaPython className="text-7xl " />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    < SiStreamlit className="text-7xl text-red-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    < LuBrainCircuit className="text-7xl text-cyan-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    < SiFlask className="text-7xl" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    <VscVscode className="text-7xl text-cyan-600" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    <SiJupyter className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-900 p-4">
                    <FaGithub className="text-7xl text-black-100" />
                </motion.div>
            </motion.div>

        </div>
    )
}
export default Technologies;