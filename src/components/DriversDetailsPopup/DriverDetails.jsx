import { useFavorites } from "../ContextProviders/FavoritesProvider";
import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import { useModal } from '../ContextProviders/ModalProvider';
import DriversDetailsContent from "./DriversDetailsContent";


const DriverDetails =({ Name,dob,age,nationality, url }) => {
const {addToFavorites} = useFavorites();
const {openModal} = useModal();

const handleAddToFavorites = () =>
{
    addToFavorites('drivers',Name);
}


return(
    openModal(
    <ModalHeader title ="Driver Details" buttons = { [
        <DaisyButton key="1" color="primary" onClick={handleAddToFavorites}>
            Add Favorites
        </DaisyButton>

    ]}
    />,   
    <DriversDetailsContent Name={Name} dob={dob} age={age} nationality={nationality} url={url} />

   

)

)




}
export default DriverDetails;