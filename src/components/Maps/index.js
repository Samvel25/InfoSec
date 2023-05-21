import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { DefaultTheme } from "./MapTheme";
import { Box, Stack, Typography } from "@mui/material";
import MarkerIcon from "../../media/mapMarkerIcon.svg";
// import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
	height: "400px",
};

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
	console.log("center", center);
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

	console.log("marker", Marker);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = undefined;
	}, []);

	return (
		<div>
			<Typography sx={{ mb: "20px" }} variant="FooterHead" component={"p"}>
				Contact Us
			</Typography>
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
			<Stack direction={"row"} spacing={5} sx={{ mt: "5px" }}>
				<Box>
					<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
						Email
					</Typography>
					<Typography
						href="mailto:infosec@gmail.com"
						sx={{ fontSize: "12px", mb: "0" }}
						variant="FooterHead"
						component={"a"}
					>
						infosec@gmail.com
					</Typography>
				</Box>
				<Box>
					<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
						Phone
					</Typography>
					<Typography
						href="tel:+374 066 666 666"
						sx={{ fontSize: "12px", mb: "0" }}
						variant="FooterHead"
						component={"a"}
					>
						+374 066 666 666
					</Typography>
				</Box>
			</Stack>
		</div>
	);
};
export default Map;
