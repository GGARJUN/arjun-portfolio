
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section id='work' className='pt-20'>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
         className='text-4xl font-semibold tracking-tighter text-center'>
            Work Experience
        </motion.h2>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay:0.5 }}
         className='p-10 space-y-8'>
            {EXPERIENCES.map((experience,index)=>(
                <motion.div
                initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index*0.2}}
                 key={index} className='p-4 border shadow-md bg-white/10 border-stone-50/30 rounded-xl'>
                    <h3 className='text-2xl font-semibold'>{experience.title}</h3>
                    <p className='text-xl'>{experience.company}</p>
                    <p className='text-sm text-slate-300'>{experience.duration}</p>
                    <p className='mt-2 text-base text-justify'>{experience.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default WorkExperience