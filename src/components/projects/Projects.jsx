import carbook from '../../images/carbook.png'
import car from '../../images/car.png'
import main from '../../images/main.png'
import music from '../../images/music.png'
import typuj from '../../images/typuj.png'

import InfiniteCarousel from 'react-leaf-carousel'

const Projects = () => {
  const portfolio = [
    {
      link: 'https://carbookpage.herokuapp.com/',
      git: null,
      name: 'Carbook',
      img: carbook,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'https://siemacotam.github.io/music/',
      git: null,
      name: 'MusicApp',
      img: music,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'https://siemacotam.github.io/mainshop/',
      git: 'https://github.com/siemacotam/mainshop',
      name: 'MainShop',
      img: main,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'xxx',
      git: 'https://github.com/siemacotam/sudoku',
      name: 'SudokuApp',
      img: music,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'https://siemacotam.github.io/carapp/',
      git: 'https://github.com/siemacotam/carapp',
      name: 'CarLocationApp',
      img: car,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'https://matchtypeapp.herokuapp.com/',
      git: null,
      name: 'Typuj.pl',
      img: typuj,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
    {
      link: 'https://siemacotam.github.io/portfolio/',
      git: 'https://github.com/siemacotam/portfolio',
      name: 'Portfolio',
      img: typuj,
      description: 'Portal z ofertami aut - w toku',
      docs: 'Projekt wykonany za pomocą react. wykorzystane technologie to : ... , fukncjonalność strony to ...',
    },
  ]

  const pagesToShow = portfolio.map((page) => {
    const { link, git, name, img, description, docs } = page
    return (
      <div className="projects__page">
        <div className="projects__titleWrap">
          <p className="projects__title">{name}</p>
          <a className="projects__link" href={link}>
            DEMO
          </a>{' '}
          <br />
          {git && (
            <a className="projects__link" href={git}>
              GITHUB
            </a>
          )}
        </div>
        <div className="projects__imgWrap shadowItem">
          <img className="projects__img" src={img} alt="" />
        </div>
        <div className="projects__detailsWrap shadowItem">
          <p>{description}</p>
          <p>{docs}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="projects">
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        dots={true}
        arrows={true}
        showSides={true}
        sidesOpacity={0.3}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={1}
        scrollOnDevice={true}
        placeholderImageSrc
      >
        {pagesToShow}
      </InfiniteCarousel>
    </div>
  )
}

export default Projects
