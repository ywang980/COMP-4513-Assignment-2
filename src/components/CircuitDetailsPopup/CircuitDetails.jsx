import { useFavorites } from "../ContextProviders/FavoritesProvider";
import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import CircuitDetailsContent from "./CircuitDetailsContent";
import { useModal } from '../ContextProviders/ModalProvider';


const CircuitDetails =({ Name,Location,Country, url }) => {
const {addToFavorites} = useFavorites();
const {openModal} = useModal();

const handleAddToFavorites = () =>
{
    addToFavorites('circuits',Name);
}


return(
    openModal(
    <ModalHeader title ="Circuit Details" buttons = { [
        <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
            Add Favorites
        </DaisyButton>

    ]}
    />,   
    <CircuitDetailsContent  circuitLocation= {Location} Name={Name} Country={Country} url={url} />

)

)




}
export default CircuitDetails;