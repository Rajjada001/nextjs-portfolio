'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion'

const projectData = [
  {
    id: 1,
    title: 'React PortFolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.jpeg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Covid Data Visualization',
    description: 'Project 1 description',
    image: '/images/projects/2.jpg',
    tag: ['All', 'Data'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerice Website',
    description: 'Project 3 description',
    image: '/images/projects/3.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Face Recognition',
    description: 'Project 4 description',
    image: '/images/projects/4.jpg',
    tag: ['All', 'Data'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Automatic Personality Classification',
    description: 'Project 5 description',
    image: '/images/projects/5.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Estimation of Student Salary',
    description: 'Project 6 description',
    image: '/images/projects/6.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Emergency SOS Notification',
    description: 'Project 7 description',
    image: '/images/projects/7.jpg',
    tag: ['All', 'Android'],
    gitUrl: '/',
    previewUrl: '/',
  },
]

const ProjectSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-4 '>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Android'
          isSelected={tag === 'Android'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection
