import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { DefaultTheme } from "./MapTheme";
import MarkerIcon from "../../media/svg/mapMarkerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcut: false,
	scrollwheel: true,
	disableDoubleClickZomm: false,
	fullscreenControl: false,
	styles: DefaultTheme,
	strokeWeight: 0.5,
};

const Map = ({ center }) => {
	const theme = useTheme();
	const isXXlUp = useMediaQuery(theme.breakpoints.up("xxl"));
	const isMDDown = useMediaQuery(theme.breakpoints.down("sm"));

	const containerStyle = {
		height: isXXlUp ? "500px" : isMDDown ? "260px" : "400px",
	};
	const mapRef = React.useRef(null);

	const [fakeCenter, setFakeCenter] = useState(null);

	useEffect(() => {
		setFakeCenter(center);
	}, [center]);

	const handleClick = () => {
		if (fakeCenter) {
			const lat = fakeCenter.lat;
			const lng = fakeCenter.lng;
			window.open(
				`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
			);
		}
	};

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = undefined;
	}, []);

	return (
		<div>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={13}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				{fakeCenter && (
					<Marker
						position={fakeCenter}
						icon={{ url: MarkerIcon }}
						onClick={handleClick}
					/>
				)}
			</GoogleMap>
		</div>
	);
};
export default Map;
