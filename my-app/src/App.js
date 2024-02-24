import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Menu from './components/Menu/Menu';
import SingleMenu from './components/SingleMenu/SingleMenu';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';
import 'reset-css' ;
import './style.scss';

function App() {
  return (
<Routes>
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Menu/:id" element={<SingleMenu />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Route>
</Routes>
);
}

export default App;
