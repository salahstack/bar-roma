/**
 * Constants
 */
import { signatureOfferingsData } from '../constants/signature-offerings-data';
/**
 * Components
 */
import SignatureOfferingsCard from './SignatureOfferingsCard';


const SignatureOfferings  = () => {
  return (
    <section className='section bg-white'>
      <div className='container'>
        <div className='font-playfair text-center'>
          <p className='uppercase text-roma-gold text-md font-playfair font-medium mb-2'>cosa offriamo</p>
          <h2 className='font-playfair text-5xl font-bold'>Offerte Esclusive</h2>
          <p className='text-roma-gray/70 text-md mx-auto max-w-md mt-7 relative after:absolute after:w-28 after:h-1 after:rounded-lg after:bg-roma-gold after:left-1/2 after:-translate-x-1/2 after:-bottom-7'>
            Vivi il vero gusto dell’Italia con la nostra selezione curata di
            cibi e bevande.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-17'>
          {
            signatureOfferingsData.map(({ title, description, image, label, href, icon, category }, index) => (
              <SignatureOfferingsCard title={title} description={description} image={image} label={label} href={href} category={category}  key={index} icon={icon}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;
