import ContextProviderWrapper from "./ContextProviders/ContextProviderWrapper"
import HeaderBar from '../components/HeaderBar';
import HomeViewContent from '../components/HomeViewContent';

const Home = () => {
  return (
    <ContextProviderWrapper>
      <HeaderBar />
      <HomeViewContent />
    </ContextProviderWrapper>
  );
}
export default Home;