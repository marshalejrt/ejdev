// http://sachinchoolur.github.io/lightGallery/docs/

// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/galeria/montjoi-1.jpg',
            // Thumbnail url
            'thumb': 'images/galeria/montjoi-1.jpg',
            // Title of the image
            'subHtml': 'Parte de la Homepage'
        }, {
            'src': 'images/galeria/montjoi-2.jpg',
            'thumb': 'images/galeria/montjoi-2.jpg',
            'subHtml': "Ubicación interacción con Google Maps"
        }, {
            'src': 'images/galeria/montjoi-3.jpg',
            'thumb': 'images/galeria/montjoi-3.jpg',
            'subHtml': "Sección Restaurant - Galerías"
        }, {
            'src': 'images/galeria/montjoi-4.jpg',
            'thumb': 'images/galeria/montjoi-4.jpg',
            'subHtml': 'Sección Submarinismo'
        }]
        
    });
    
    return false;
});

// GALLERY 1
jQuery('#gallery2').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/galeria/webempleado-1.jpg',
            // Thumbnail url
            'thumb': 'images/galeria/webempleado-1.jpg',
            // Title of the image
            'subHtml': 'Pantalla de Acceso'
        }, {
            'src': 'images/galeria/webempleado-2.jpg',
            'thumb': 'images/galeria/webempleado-2.jpg',
            'subHtml': "Menú Material Desing"
        }, {
            'src': 'images/galeria/webempleado-3.jpg',
            'thumb': 'images/galeria/webempleado-3.jpg',
            'subHtml': "Pantalla Acerca de..."
        }, {
            'src': 'images/galeria/webempleado-4.jpg',
            'thumb': 'images/galeria/webempleado-4.jpg',
            'subHtml': 'Consulta de Recibo de Pago'
        }, {
            'src': 'images/galeria/webempleado-5.jpg',
            'thumb': 'images/galeria/webempleado-5.jpg',
            'subHtml': 'Recibo de Pago'
        }]
        
    });
    
    return false;
});

// GALLERY 1
jQuery('#gallery3').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/galeria/cantera-1.jpg',
            // Thumbnail url
            'thumb': 'images/galeria/cantera-1.jpg',
            // Title of the image
            'subHtml': ''
        }, {
            'src': 'images/galeria/cantera-2.jpg',
            'thumb': 'images/galeria/cantera-2.jpg',
            'subHtml': "cantera"
        }, {
            'src': 'images/galeria/cantera-3.jpg',
            'thumb': 'images/galeria/cantera-3.jpg',
            'subHtml': ""
        }]
        
    });
    
    return false;
});


jQuery('#gallery4').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/galeria/index-1.jpg',
            // Thumbnail url
            'thumb': 'images/galeria/index-1.jpg',
            // Title of the image
            'subHtml': ''
        }, {
            'src': 'images/galeria/index-2.jpg',
            'thumb': 'images/galeria/index-2.jpg',
            'subHtml': ""
        }, {
            'src': 'images/galeria/index-3.jpg',
            'thumb': 'images/galeria/index-3.jpg',
            'subHtml': ""
        }, {
            'src': 'images/galeria/index-4.jpg',
            'thumb': 'images/galeria/index-4.jpg',
            'subHtml': ""
        }, {
            'src': 'images/galeria/index-5.jpg',
            'thumb': 'images/galeria/index-5.jpg',
            'subHtml': ""
        }]
        
    });
    
    return false;
});
