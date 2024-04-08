import { useModal } from './ContextProviders/ModalProvider';
import CircuitDetails from './CircuitDetailsPopup/CircuitDetails'
import DriverDetails from './DriverDetailsPopup/DriverDetails';
import ConstructorDetails from './ConstructorDetailsPopup/ConstructorDetails';

export function usePopupHandlers() {
  const { openModal } = useModal();

  const handleCircuitNameClick = (circuitId) => {
    openModal(<CircuitDetails circuitId={circuitId} />);
  };

  const handleDriverNameClick = (driverId) => {
    openModal(<DriverDetails driverId={driverId} />);
  };

  const handleConstructorNameClick = (constructorId) => {
    openModal(<ConstructorDetails constructorId={constructorId} />);
  };

  return { handleCircuitNameClick, handleDriverNameClick, handleConstructorNameClick };
}