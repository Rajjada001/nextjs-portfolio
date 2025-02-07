import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? 'text-white bg-primary-500'
    : 'text-[#ADB7BE] px-4 border-slate-600 hover:border-white'
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 ml-4 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  )
}

export default ProjectTag
