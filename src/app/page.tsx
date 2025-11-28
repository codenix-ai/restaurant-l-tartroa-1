'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>l tartroa - Italiana</title>
        <meta name="description" content="En el corazón de Bogotá, 'l tartroa' se erige como un santuario de la gastronomía italiana, donde la tradición y la innovación se entrelazan en cada plato. Este restaurante, que evoca la calidez de una trattoria auténtica, ofrece una experiencia culinaria que trasciende lo ordinario. Su carta es un homenaje a los sabores de Italia, destacando especialidades como sus irresistibles pizzas, elaboradas con masas artesanales y una selección de ingredientes frescos que despiertan los sentidos. La pasta, hecha a mano con maestría, se sirve acompañada de salsas que cuentan historias de regiones italianas, ofreciendo una explosión de sabor en cada bocado. El risotto, cremoso y delicado, es una de las joyas de 'l tartroa', preparado con precisión para alcanzar la perfecta armonía de texturas y sabores. Cada visita promete una inmersión en la cultura italiana, no solo a través del paladar, sino también mediante un ambiente acogedor y un servicio que irradia hospitalidad. 'l tartroa' no es simplemente un restaurante; es un viaje sensorial que invita a los comensales a disfrutar de la esencia de Italia en cada rincón. Aquellos que busquen una velada inolvidable hallarán en 'l tartroa' un refugio exquisito, donde cada comida se convierte en una celebración de la vida." />
        <meta name="keywords" content="restaurante, Italiana, Bogotá" />
      </Head>
      <header className="bg-white text-primary shadow-lg">
        <nav className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <Image src="https://emprendyup-images.s3.us-east-1.amazonaws.com/l_tartroa/8ebc7241-37d6-4b79-a199-e589108dbe85.webp" alt="l tartroa Logo" width={50} height={50} />
            <span className="ml-3 font-heading text-xl font-bold">l tartroa</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-secondary hover:text-primary">Inicio</a></li>
            <li><a href="#about" className="text-secondary hover:text-primary">Sobre Nosotros</a></li>
            <li><a href="#menu" className="text-secondary hover:text-primary">Menú</a></li>
            <li><a href="#gallery" className="text-secondary hover:text-primary">Galería</a></li>
            <li><a href="#testimonials" className="text-secondary hover:text-primary">Testimonios</a></li>
            <li><a href="#contact" className="text-secondary hover:text-primary">Contacto</a></li>
          </ul>
          <a href="#reservation" className="bg-primary text-white py-2 px-4 rounded hover:bg-primaryDark transition-all">Reserva Ahora</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: `url('/path/to/hero-bg-italian-restaurant.webp')` }}>
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-heading font-bold leading-tight">{`l tartroa`}</h1>
            <p className="mt-4 text-lg">{`Un Viaje Culinario a Italia`}</p>
            <p className="mt-2">{`Sumérgete en nuestra trattoria donde la tradición italiana se vive en cada plato. Disfruta de nuestras pizzas artesanales, pasta hecha a mano y risottos cremosos.`}</p>
            <a href="#reservation" className="mt-6 bg-accent text-secondary py-2 px-4 rounded hover:bg-primary transition-all inline-block">{`Reserva tu mesa`}</a>
          </div>
        </section>

        <section id="about" className="py-12 bg-background text-text">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Nuestra Historia`}</h2>
            <div className="space-y-4">
              {[
                "En 'l tartroa', nos enorgullece traer la auténtica cocina italiana a Bogotá. Desde nuestras pizzas con masa artesanal hasta nuestras pastas frescas, cada plato es una celebración de la tradición culinaria italiana.",
                "Fundado por amantes de la gastronomía, 'l tartroa' es un lugar donde la innovación se encuentra con la tradición, creando una experiencia única para nuestros comensales.",
                "Nuestro equipo está dedicado a ofrecer no solo platos deliciosos, sino también un ambiente acogedor que te transporta a las cálidas trattorias de Italia."
              ].map((paragraph, index) => (
                <p key={index} className="text-center">{paragraph}</p>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-6 text-center">
              {[
                { label: "Años de Experiencia", value: "10" },
                { label: "Platos Servidos", value: "50,000+" },
                { label: "Clientes Satisfechos", value: "20,000+" }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="py-12 bg-primary text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Nuestro Menú`}</h2>
            <p className="text-center mb-8">{`Una Celebración de Sabores Italianos`}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Pizza Margherita", price: "25,000 COP", description: "Clásica pizza italiana con mozzarella fresca, tomate y albahaca." },
                { name: "Tagliatelle al Pesto", price: "30,000 COP", description: "Pasta fresca con una salsa de albahaca, piñones y parmesano." },
                { name: "Risotto de Setas", price: "35,000 COP", description: "Cremoso risotto con una mezcla de setas silvestres y trufa." },
                { name: "Tiramisú Clásico", price: "15,000 COP", description: "Postre tradicional italiano con capas de mascarpone y café." }
              ].map((item, index) => (
                <div key={index} className="bg-white text-secondary p-6 rounded shadow-lg transition-transform transform hover:scale-105">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-2">{item.description}</p>
                  <p className="mt-4 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-12 bg-background text-text">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Galería`}</h2>
            <p className="text-center mb-8">{`Una Mirada a Nuestros Platos y Ambiente`}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: "gallery-1", alt: "Plato de pasta fresca servida con pesto" },
                { id: "gallery-2", alt: "Pizza Margherita recién horneada en una mesa de madera" },
                { id: "gallery-3", alt: "Interior acogedor del restaurante l tartroa" },
                { id: "gallery-4", alt: "Delicioso tiramisú en un plato blanco" }
              ].map((image, index) => (
                <div key={index} className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/path/to/${image.id}.webp')` }}>
                  <span className="sr-only">{image.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 bg-primary text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Testimonios`}</h2>
            <p className="text-center mb-8">{`Lo Que Dicen Nuestros Clientes`}</p>
            <div className="space-y-8">
              {[
                { name: "Carlos M.", comment: "Una experiencia increíble. La pizza es la mejor que he probado fuera de Italia. El ambiente es acogedor y el servicio excepcional." },
                { name: "Laura G.", comment: "El risotto de setas fue sublime. Cada bocado era una explosión de sabor. Definitivamente regresaré." },
                { name: "Miguel R.", comment: "El lugar perfecto para una cena romántica. La atención al detalle en cada plato es evidente. ¡Altamente recomendado!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white text-secondary p-6 rounded shadow-lg">
                  <p className="italic">"{testimonial.comment}"</p>
                  <p className="mt-4 font-bold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 bg-background text-text">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Contáctanos`}</h2>
            <p className="text-center mb-8">{`Estamos Aquí Para Ti`}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold">Dirección</h3>
                <p>Calle 45 67 45, Bogotá, Colombia</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Teléfono</h3>
                <p>3245678909</p>
                <h3 className="text-lg font-bold mt-4">Correo Electrónico</h3>
                <p>juan@codenixai.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Horario</h3>
                <p>Lunes a Jueves: 12:00 - 22:00</p>
                <p>Viernes y Sábado: 12:00 - 23:00</p>
                <p>Domingo: 12:00 - 21:00</p>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <a href="https://www.facebook.com/" className="text-primary hover:text-primaryDark transition-all">Facebook</a>
              <a href="https://www.facebook.com/" className="text-primary hover:text-primaryDark transition-all">Twitter</a>
              <a href="https://www.facebook.com/" className="text-primary hover:text-primaryDark transition-all">Instagram</a>
            </div>
          </div>
        </section>

        <section id="reservation" className="py-12 bg-primary text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">{`Reserva Tu Mesa`}</h2>
            <form className="space-y-4 max-w-md mx-auto bg-white text-secondary p-6 shadow-lg rounded">
              <div>
                <label htmlFor="name" className="block font-bold">Nombre</label>
                <input type="text" id="name" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold">Correo Electrónico</label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-bold">Teléfono</label>
                <input type="tel" id="phone" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="date" className="block font-bold">Fecha</label>
                <input type="date" id="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="time" className="block font-bold">Hora</label>
                <input type="time" id="time" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="guests" className="block font-bold">Número de Personas</label>
                <input type="number" id="guests" min="1" className="w-full p-2 border rounded" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primaryDark transition-all">Reservar</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>{`'l tartroa' es una trattoria italiana en Bogotá, dedicada a ofrecer auténticos sabores italianos en un ambiente acogedor.`}</p>
          <p className="mt-2">{`© 2023 l tartroa. Todos los derechos reservados.`}</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;