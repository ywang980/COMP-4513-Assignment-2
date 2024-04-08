import { useModal } from '../ContextProviders/ModalProvider';
import CircuitDetails from './CircuitDetails';
import DriverDetails from './DriverDetails';
import ConstructorDetails from './ConstructorDetails';

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