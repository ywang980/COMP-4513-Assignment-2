const CircuitDetailsContent = ({ circuitLocation}) => {
    return(
        <div className="flex space-x-5">
            <div className="flex-shrink-0 border h-88 w-88"> {/* 350px equivalent in Tailwind */}
                <img src="../Assets/f1_v2.png" alt="Circuit Image" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow border h-88 w-88"> {/* 350px equivalent in Tailwind */}
                {/* Insert your Leaflet React component here */}
            </div>
        </div>
    );
}

export default CircuitDetailsContent;
