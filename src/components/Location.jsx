import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 40.416775, // Replace with actual coordinates
    lng: -3.703790
  };

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Ubicación</h2>
        <div className="max-w-4xl mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3973.521582093733!2d-80.63162930309772!3d-5.180352970331206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a10757482b413%3A0x5597806021a275d5!2sFortunato%20Chirichigno%20656%2C%20Piura%2020009!5e0!3m2!1ses!2spe!4v1738963369168!5m2!1ses!2spe" 
          width={'100%'}
          height="450" 
          loading="lazy" >
        </iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;