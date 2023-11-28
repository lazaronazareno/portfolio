import './projectsLoading.css'

const ProjectsLoading = () => {
  return (
    <article>
      <div
        className='article-image-section article-section image-skeleton'
        style={{
          backgroundImage:
            'url(https://cdn-icons-png.flaticon.com/512/1160/1160358.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'grey',
          // eslint-disable-next-line comma-dangle
          minHeight: '12rem',
        }}
      />
      <div
        className='article-description-section article-section'
        style={{ gap: '.5rem' }}
      >
        <div className='article-description-stack'>
          <div className='icon-skeleton' />
          <div className='icon-skeleton' />
          <div className='icon-skeleton' />
        </div>
        <div className='p-skeleton' />
        <div className='p-skeleton' />
        <div className='p-skeleton' />
      </div>
      <div className='article-title-section article-section'>
        <div className='title-skeleton' />
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className='button-skeleton' />
          <div className='button-skeleton' />
        </div>
      </div>
      <div className='article-nav-section article-section'>
        <button className='arrow-skeleton'>
          <div className='arrow-icon-skeleton left' />
        </button>
        <button className='arrow-skeleton '>
          <div className='arrow-icon-skeleton right' />
        </button>
      </div>
    </article>
  )
}

export default ProjectsLoading
