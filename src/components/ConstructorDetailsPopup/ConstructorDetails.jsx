import { useFavorites } from "../ContextProviders/FavoritesProvider";
import ModalHeader from "../ModalHeader";
import DaisyButton from '../DaisyButton';
import { useModal } from '../ContextProviders/ModalProvider';
import ConstructorDetailsContent from "./ConstructorDetailsContent";


const ConstructorDetails =({ Name,nationality, url }) => {
const {addToFavorites} = useFavorites();
const {openModal} = useModal();

const handleAddToFavorites = () =>
{
    addToFavorites('constructors',Name);
}


return(
    openModal(
    <ModalHeader title ="Constructor Details" buttons = { [
        <DaisyButton  key="1" color="primary" onClick={handleAddToFavorites}>
            Add Favorites
        </DaisyButton>

    ]}
    />,   
    <ConstructorDetailsContent Name={Name}  nationality={nationality} url={url} />

   

)

)




}
export default ConstructorDetails;