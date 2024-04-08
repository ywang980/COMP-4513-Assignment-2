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
    <ModalHeader title ="CircuitDetails" buttons = { [
        <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
            Add Favorites
        </DaisyButton>

    ]}
    />,
    <>
    <p>{Name},{Location},{Country},{url}</p>
    <CircuitDetailsContent  circuitLocation= {Location} />
    </>
)

)




}
export default CircuitDetails;