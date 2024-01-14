import Backgrounds from './components/Backgrounds';
import Footer from './components/layout/Footer';
import Access from './components/scenes/Access';
import Hero from './components/scenes/Hero';
import Snippets from './components/scenes/Snippets';
import Workflow from './components/scenes/Workflow';

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Backgrounds />
      <div className="max-w-[1440px] px-5 mx-auto">
        <Hero />
        <Snippets />
        <Access />
        <Workflow />
      </div>
      <Footer />
    </div>
  );
};

export default App;
