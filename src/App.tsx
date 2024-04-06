import Map from "./components/Map";

function App() {
    console.log(import.meta.env.VITE_MAPBOX_TOKEN);
    return (
        <div className='font-bold'>
            <Map />
        </div>
    );
}

export default App;
