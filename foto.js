// DATE GALERII - Aici adaugi pozele pentru fiecare eveniment.
// Cheia (ex. 'debora-moise') e aceeași cu data-gallery de pe cardul din foto.html.
const weddingGalleries = {
    'debora-moise': {
        title: 'Alexandra & Adi',
        photos: [
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08789.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08826.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08905.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08931.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08951.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08955.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08958.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08963.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08967.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08975.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08981.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09000.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09004.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09031.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09035.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09060.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09074.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09078.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09089.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09093.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09102.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09110.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09600.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09616.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09659.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09661.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09662.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09667.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09679.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00185.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00189.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00196.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00238.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00251.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00321.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00432.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00464.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00638.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00643.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00643-2.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00700.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08964.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC08976.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00777.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00778.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00779.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00781.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC00783.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01651.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01653.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01657.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01658.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01660.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01665.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01667.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01668.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01672.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01686.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01693.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01694.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01696.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01711.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01726.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01736.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01737.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01738.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01741.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01749.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC01750.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09604.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09606.webp',
            'https://poze.b-cdn.net/nunti/alexandra-adi/DSC09619.webp'
        ]
    },
    'ana-mihai': {
        title: 'Alexandra & Madalin',
        photos: [
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05422.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05430.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05432.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05451.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05454.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05462.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05465.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05475.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05476.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05477.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05480.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05481.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05482.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05489.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05491.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05492.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05502.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05504.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05513.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05533.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05538.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05567.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05568.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05581.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05582.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05599.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05606.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05608.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05614.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05642.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05673.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05679.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05693.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05695.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05706.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05713.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05723-2.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05728.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05734.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05744.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05748.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05749.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05750.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05753.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05760.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05767.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05771.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05775.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05785.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05792.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05795.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05812.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05813.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05821.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05829.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05835.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05836.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05843.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05847.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05852.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05862.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05871.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05876.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05877.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05894.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05897.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05901.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05907.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05913.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05915.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05920.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05942.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05945.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05949.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05951.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05953.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05956.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05958.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05959.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05968.webp',
            'https://poze.b-cdn.net/cununii/alexandra-madalin/DSC05975.webp'
        ]
    },
    'maria-andrei': {
        title: 'Natalia & Vio',
        photos: [
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00575.webp',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00542.webp',
              'https://poze.b-cdn.net/nunti/andrada-vio/DSC00535.webp',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00503.webp',
              'https://poze.b-cdn.net/nunti/andrada-vio/DSC00486.webp',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00456.webp',
              'https://poze.b-cdn.net/DSC00442.jpg',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00435.webp',
              'https://poze.b-cdn.net/nunti/andrada-vio/DSC00424.webp',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00430.webp',
              'https://poze.b-cdn.net/nunti/andrada-vio/DSC00413.webp',
            'https://poze.b-cdn.net/nunti/andrada-vio/DSC00411.webp',
           
        ]
    },
    'elena-cristian': {
        title: 'Mirela & Dorian',
        photos: [
             'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02579.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02554.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02544.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02523.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02499.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02505.webp',
             'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02484.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02455.webp',
             'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02465.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02446.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02437.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02432.webp',
            'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02425.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02416.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02411.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02409.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02407.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02402.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02395.webp',
          'https://poze.b-cdn.net/nunti/mirela-dorian/DSC02381.webp',
       
        ]
    },
    'ioana-alexandru': {
        title: 'Oana & Gabi',
        photos: [
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08562.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08537.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08534.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08494.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08449.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08439.webp',
             'https://poze.b-cdn.net/nunti/oana-gabi/DSC08426.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08422.webp',
             'https://poze.b-cdn.net/nunti/oana-gabi/DSC08422.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08370.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08358.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08353.webp',
            'https://poze.b-cdn.net/nunti/oana-gabi/DSC08353.webp',
          'https://poze.b-cdn.net/nunti/oana-gabi/DSC08353-3.webp',
          'https://poze.b-cdn.net/nunti/oana-gabi/DSC08329.webp',
          'https://poze.b-cdn.net/nunti/oana-gabi/DSC08289.webp',
          'https://poze.b-cdn.net/nunti/oana-gabi/DSC08244.webp',
          'https://poze.b-cdn.net/nunti/oana-gabi/DSC08195.webp',
        ]
    },
    'cristina-adrian': {
        title: 'Elisa',
        photos: [
            'https://poze.b-cdn.net/majorate/elisa/DSC00537.webp',
            'https://poze.b-cdn.net/majorate/elisa/DSC00418.webp',
            'https://poze.b-cdn.net/majorate/elisa/DSC00438.webp',
            'https://poze.b-cdn.net/majorate/elisa/DSC00853.webp',
            'https://poze.b-cdn.net/majorate/elisa/image00001.webp',
            'https://poze.b-cdn.net/majorate/elisa/DSC02606.webp',
             'https://poze.b-cdn.net/majorate/elisa/DSC02668.webp',
            'https://poze.b-cdn.net/majorate/elisa/DSC01605.webp'
        ]
    },

  'majorat1': {
        title: 'Liviu',
        photos: [
            'https://poze.b-cdn.net/majorate/liviu/DSC08193.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08183.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08162.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08144.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08142.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08117.webp',
              'https://poze.b-cdn.net/majorate/liviu/DSC08081.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08052.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08048.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08037.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC08030.webp',
              'https://poze.b-cdn.net/majorate/liviu/DSC08016.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC07998.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC07959.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC07942.webp',
            'https://poze.b-cdn.net/majorate/liviu/DSC07920.webp',
        
            
            
        ]
    },

      'majorat2': {
        title: 'Vladulescu',
        photos: [
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201).jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-9.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-7.jpg',
               'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-5.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-35.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-33.jpg',
               'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-32.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-31.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-21.jpg',
               'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-21.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-2.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-2.jpg',
              'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-19.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-18.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-16.jpg',
               'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-14.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-13.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-12.jpg',
               'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-11.jpg',
            'https://poze.b-cdn.net/raul.marian.photography%20(1%20of%201)-10.jpg',
            '',
          
            
        ]
    },

    
};

// ----- Galeria pe tot ecranul -----
(function () {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  const title = document.getElementById('galleryTitle');
  const count = document.getElementById('galleryCount');
  const photo = document.getElementById('galleryPhoto');
  const thumbs = document.getElementById('galleryThumbs');
  let photos = [];
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    index = (i + photos.length) % photos.length;
    photo.src = photos[index];
    photo.alt = `${title.textContent}, fotografia ${index + 1}`;
    count.textContent = `${index + 1} / ${photos.length}`;
    [...thumbs.children].forEach((t, k) => t.setAttribute('aria-current', String(k === index)));
    const on = thumbs.children[index];
    if (on) on.scrollIntoView({ block: 'nearest', inline: 'center' });
    // pregătește poza următoare
    new Image().src = photos[(index + 1) % photos.length];
  };

  const open = (card) => {
    const data = weddingGalleries[card.dataset.gallery];
    if (!data) return;
    // galeriile fără poze arată poza de copertă a cardului
    photos = data.photos.filter(Boolean);
    if (!photos.length) photos = [card.querySelector('img').src];
    lastFocus = document.activeElement;
    title.textContent = data.title;
    thumbs.innerHTML = '';
    photos.forEach((src, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Fotografia ${k + 1}`);
      b.innerHTML = `<img src="${src}" alt="" loading="lazy" decoding="async">`;
      b.addEventListener('click', () => show(k));
      thumbs.appendChild(b);
    });
    gallery.classList.add('is-open');
    gallery.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    show(0);
    gallery.querySelector('.modal-close').focus();
  };

  const close = () => {
    gallery.classList.remove('is-open');
    gallery.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('.work[data-gallery]').forEach((card) => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });
  gallery.querySelector('.modal-close').addEventListener('click', close);
  gallery.querySelector('.gallery-nav.prev').addEventListener('click', () => show(index - 1));
  gallery.querySelector('.gallery-nav.next').addEventListener('click', () => show(index + 1));
  gallery.querySelector('.gallery-main').addEventListener('click', (e) => { if (e.target === e.currentTarget) close(); });
  document.addEventListener('keydown', (e) => {
    if (!gallery.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  // glisare pe telefon
  let startX = 0;
  const main = gallery.querySelector('.gallery-main');
  main.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].screenX; }, { passive: true });
  main.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) show(index + (diff > 0 ? 1 : -1));
  }, { passive: true });
})();
