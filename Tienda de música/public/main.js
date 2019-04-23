const context = {
  title: 'Bienvenido a Musicon',
  body: 'Musicon es un escaparate musical, con la misión de compartir la alegría de la música. Estas magníficas herramientas auditivas están diseñadas con creadores musicales, como tú, en mente. Los aficionados, principiantes y expertos pueden apreciar los sonidos resplandecientes proporcionados por cada uno de los instrumentos que llevamos. ¡Únete a nosotros para entregar las vibraciones eufóricas de la melodía a los ciudadanos del mundo!',
  instruments: [
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Teclado Electrónico',
      description: 'Un piano bienvenido al siglo XXI. Los pianistas celebran el formato de forma compacta y la diversidad de ritmos sintetizados, todo en una máquina musical magistral.',
      price: '$1,999.00',
      sale: '$1,699.89'
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Guitarra Eléctrica',
      description: 'Únete a las leyendas de los años 50 y 60 cuando el matrimonio de guitarra y electricidad creó el instrumento más influyente de una generación. Nota: las picas se venden por separado.',
      price: '$599.99'
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bajo Eléctrico',
      description: 'Experimenta la personificación de las frecuencias funkadélicas que hay en el bajo. Deja que las notas graves y profundas del bajo resuenen con los latidos del corazón en todas partes.',
      price: '$624.99'
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Kit de Batería',
      description: '¿Alguna vez pensaste, "un solo instrumento no es suficiente?" Encuentra una respuesta en el kit de batería. Coordina una colección de tambores y platillos para dictar el ritmo de la obra maestra musical.',
      price: '$649.00',
      sale: '$349.00'
    },
    {
      image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
      name: 'Violín',
      description: 'Un versátil que es adecuado para cualquier y todas las ocasiones. Aquellos que lleven trajes de etiqueta pueden montar un clásico. Otros que prefieren deportivos pueden llamarlo violín y tocar algunas canciones populares.',
      price: '$245.00'
    }
  ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;
