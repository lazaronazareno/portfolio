import * as Icons from 'react-icons/si'

const stacks = {
  html: 'SiHtml5',
  css: 'SiCss3',
  js: 'SiJavascript',
  nodejs: 'SiNodedotjs',
  react: 'SiReact',
  mysql: 'SiMysql',
  java: 'SiJava',
  mongodb: 'SiMongodb',
  nextjs: 'SiNextdotjs',
  redux: 'SiRedux',
  firebase: 'SiFirebase',
  bootstrap: 'SiBootstrap',
  docker: 'SiDocker',
  angular: 'SiAngular',
  express: 'SiExpress',
  springboot: 'SiSpring',
  typescript: 'SiTypescript',
  vuejs: 'SiVuedotjs',
  tailwind: 'SiTailwindcss',
  cssmodules: 'SiCssmodules'
}

export const DynamicIcon = ({ name, size }) => {
  const iconName = stacks[name]
  const IconComponent = Icons[iconName]

  if (!IconComponent) {
    return null
  }

  return IconComponent({ size })
}
