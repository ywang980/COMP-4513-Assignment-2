import ContextProviderWrapper from "./ContextProviders/ContextProviderWrapper"
import HeaderBar from "./HeaderBar/HeaderBar";
import HomeViewContent from '../components/HomeViewContent';

/**
 * The home view with a header and relevant context providers.
 */
const Home = () => {
  return (
    <ContextProviderWrapper>
      <HeaderBar />
      <HomeViewContent />
    </ContextProviderWrapper>
  );
}
export default Home;