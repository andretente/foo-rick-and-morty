import './Character.css'

import { motion } from 'framer-motion'
import { useLoaderData } from 'react-router-dom'

import { CharacterTypes } from '../../../@types/rick-morty.types'

export default function Character() {
  const data = useLoaderData() as CharacterTypes

  const elementVariants = { off: { opacity: 0 }, on: { opacity: 1 } }

  return (
    <motion.div
      className="character__card"
      variants={{ on: { transition: { staggerChildren: 0.1 } } }}
      initial="off"
      animate="on"
    >
      <motion.h2 className="character__title" variants={elementVariants}>
        {data.name}
      </motion.h2>

      <motion.img
        alt={`thumbnail of the character${data.name}`}
        className="character__image"
        height={300}
        width={300}
        src={data.image}
        variants={elementVariants}
      />

      <motion.ul
        className="character__details-list"
        variants={{ on: { transition: { delay: 0.05, staggerChildren: 0.1 } } }}
      >
        <motion.li variants={elementVariants}>
          Species: {data.species}
        </motion.li>

        <motion.li variants={elementVariants}>Status: {data.status}</motion.li>

        <motion.li variants={elementVariants}>
          Origin: {data.origin.name}
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}
