import * as Icons from 'react-icons/si'

const stacks = {
  html: 'SiHtml5',
  css: 'SiCss3',
  js: 'SiJss',
  nodejs: 'SiNodedotjs',
  react: 'SiReact',
  mysql: 'SiMysql',
  java: 'SiJava',
  mongodb: 'SiMongodb',
  nextjs: 'SiNextdotjs',
  redux: 'SiRedux',
  firebase: 'SiFirebase'
}

export const DynamicIcon = ({ name, size }) => {
  const iconName = stacks[name]
  const IconComponent = Icons[iconName]

  if (!IconComponent) {
    return null
  }

  return IconComponent({ size })
}

export const works = [
  {
    titleEn: 'Anime Songs Rater',
    descriptionEn: 'App for post and vote your favorite anime song. Login and Register. Firebase Database using NextJs',
    titleEs: 'Puntúa Canciones de Anime',
    descriptionEs: 'App para publicar y votar por tu canción de anime favorita. Inicie sesión y regístrese. Base de datos de Firebase con NextJs',
    images: [
      {
        original: 'https://i.ibb.co/8YjQsBm/Captura-de-pantalla-2023-01-21-125609.webp',
        thumbnail: 'https://i.ibb.co/8YjQsBm/Captura-de-pantalla-2023-01-21-125609.webp',
        originalAlt: 'Anime Songs Rater',
        thumbnailAlt: 'Anime Songs Rater'
      },
      {
        original: 'https://i.ibb.co/1sYzp0b/Captura-de-pantalla-2023-01-21-125643.webp',
        thumbnail: 'https://i.ibb.co/1sYzp0b/Captura-de-pantalla-2023-01-21-125643.webp',
        originalAlt: 'Anime Songs Rater',
        thumbnailAlt: 'Anime Songs Rater'
      },
      {
        original: 'https://i.ibb.co/vPCWX24/Captura-de-pantalla-2023-01-21-125716.webp',
        thumbnail: 'https://i.ibb.co/vPCWX24/Captura-de-pantalla-2023-01-21-125716.webp',
        originalAlt: 'Anime Songs Rater',
        thumbnailAlt: 'Anime Songs Rater'
      },
      {
        original: 'https://i.ibb.co/y8pTcD2/Captura-de-pantalla-2023-01-21-125745.webp',
        thumbnail: 'https://i.ibb.co/y8pTcD2/Captura-de-pantalla-2023-01-21-125745.webp',
        originalAlt: 'Anime Songs Rater',
        thumbnailAlt: 'Anime Songs Rater'
      },
      {
        original: 'https://i.ibb.co/3v2f2X8/Captura-de-pantalla-2023-01-21-130051.webp',
        thumbnail: 'https://i.ibb.co/3v2f2X8/Captura-de-pantalla-2023-01-21-130051.webp',
        originalAlt: 'Anime Songs Rater',
        thumbnailAlt: 'Anime Songs Rater'
      }
    ],
    stack: [
      'react',
      'css',
      'nextjs',
      'firebase'
    ],
    deploy: 'https://anisongs-rating.web.app/',
    repo: 'https://github.com/lazaronazareno/animesong-rater'
  }
]
