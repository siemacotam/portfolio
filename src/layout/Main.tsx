import About from 'components/about/About'
import Contact from 'components/contact/Contact'
import Home from 'components/home/Home'
import MainNav from 'components/mainNav/MainNav'
import Projects from 'components/projects/Projects'
import Questionnaire from 'components/questionnaire/Questionnaire'
import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

interface IProps {
  setIsMenuOpen(arg: boolean): void
}

const Main: FC<IProps> = ({ setIsMenuOpen }) => {
  return (
    <main className="main">
      <div className="main__wrap">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/projects" exact render={() => <Projects />} />
          <Route path="/questionnaire" exact render={() => <Questionnaire />} />
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
      <MainNav setIsMenuOpen={setIsMenuOpen} />
    </main>
  )
}

export default Main
