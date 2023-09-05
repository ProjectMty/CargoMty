import { ContactSection } from '@/src/components';

const Contacto = () => {
  return (
    <section id='contacto'>
      <h2>Contáctanos</h2>
      <ContactSection
        title='¡Empieza a importar ya!'
        location={{
          label:
            'Lázaro Cárdenas 999 Local 2, Col. Las Brisas, 64780, Monterrey, Nuevo León',
          link: 'https://goo.gl/maps/efSbnm7sufjc6sjG9',
        }}
        phone='+52 81 2090 3977'
        email='info@cargomty.com'
        whatsapp={['+52 81 1669 1037', '+52 81 8176 6691', '+52 81 1599 5077']}
        btnMessage='Enviar'
        nameInput={{ label: 'Nombre', placeholder: 'Nombre' }}
        phoneInput={{ label: 'Teléfono', placeholder: 'Teléfono' }}
        emailInput={{ label: 'Email', placeholder: 'Email' }}
        subjectInput={{
          label: 'Asunto',
          placeholder: '¿Cómo te podemos ayudar?',
        }}
      />
    </section>
  );
};

export default Contacto;
