import { PROJECTS } from "../constants"
import { motion } from "framer-motion"


const Project = () => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 id="project"
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-4xl text-center">
                Projects
            </motion.h2>
            {PROJECTS.map((project, index) => (
                <div key={index}
                    className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <img height={150} width={150} src={project.image} alt={project.title} className="mb-6 rounded" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}<span className=" text-neutral-400"> {project.duration}</span></h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        ))}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="flex w-full gap-4 max-w-xl lg:w-3/4"
                        >
                            <button  onClick={() => handleClick(project.github)} className="my-4 rounded border-2 hover:bg-neutral-900  border-neutral-900 p-1  text-sm font-medium">Github</button>
                            <button  onClick={() => handleClick(project.deploy)} className="my-4 rounded border-2 hover:bg-neutral-900 border-neutral-900 p-1  text-sm font-medium">Live Demo</button>
                        </motion.div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default Project
