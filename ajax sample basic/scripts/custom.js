jQuery( document ).ready(function($) {

    $('body').addClass('js');

    // Create a small Plugin

    var ContactFormDiv = {
        container : $('.contact_form'),
        config : {
            effect : 'slideToggle',
            speed : 300
        },
        init : function(configArg){
            $.extend(this.config, configArg); // extend() is replace the value of ContactFormDiv.config from init (argument)
            $('.contact_bt').on('click', this.show);

        },
        show : function(){
            var cf = ContactFormDiv,
                container = cf.container,
                config = cf.config;

            if(container.is(':hidden')){ // check the condition that .contact_form are display none or not
                container[config.effect](config.speed);
                cf.close.call(container);
            }
        },
        close: function(){
            var $this = $(this);

            if($this.find('.close').length) return; // this check the condition that span.close is in dom or not.

            $('<span></span>', {
                text: 'X',
                class: 'close'
            }).prependTo($this)
              .on('click', function(){
                    $this[ContactFormDiv.config.effect](ContactFormDiv.config.speed);
                });

        }
    };

    // call the plugin

    ContactFormDiv.init({
        effect: 'slideToggle',
        speed: 400
    });
});

