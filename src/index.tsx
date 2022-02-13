import ReactDOM from 'react-dom'
import './sass/style.sass'

import reportWebVitals from 'core/reportWebVitals'
import { unregister } from 'core'
import App from 'layout/App'

ReactDOM.render(<App />, document.getElementById('root'))

reportWebVitals()
unregister()
