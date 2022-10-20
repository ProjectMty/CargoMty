import { ContactForm } from '@/src/components';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>
        Contact us today to discuss how we can launch your e-commerce business
        in Mexico today!
      </h2>
      <ContactForm
        title='Start shipping today!'
        phone='+1 956 284 6632'
        email='amzshipments@cargomty.com'
        btnMessage='Send'
        nameInput={{ label: 'Name', placeholder: 'Name' }}
        phoneInput={{ label: 'Phone', placeholder: 'Phone' }}
        emailInput={{ label: 'Email', placeholder: 'Email' }}
        subjectInput={{ label: 'Message', placeholder: 'How can we assist?' }}
      />
    </section>
  );
};

export default Contact;
