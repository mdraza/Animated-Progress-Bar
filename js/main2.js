
(function($) {

    "use strict";

    jQuery(document).on("ready", function() {

        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */
        
        // Prevent console.log from generating errors in IE for the purposes of the demo
        // if (!window.console) console = {
        //     log: function() {}
        // };

        // The actual plugin
        if ($(".about-section").is("#about-section")) {
            var singleNav = jQuery('.single-page-nav');
            singleNav.singlePageNav({
                offset: singleNav.outerHeight(),
                filter: ':not(.external)',
                updateHash: false
            });

            /*
             * -----------------------------------------------------------------
             *-------------------------Skill------------------------------------
             * -----------------------------------------------------------------
             */

            var skill = $('.skills');

            var width1 = $(".prog1").data("progress");
            var progBar1 = $(".prog1");
            skill.waypoint(function() {
                progBar1.css({
                    "width": width1,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width1
            });


            var width2 = $(".prog2").data("progress");
            var progBar2 = $(".prog2");
            skill.waypoint(function() {
                progBar2.css({
                    "width": width2,
                    "transition": "2.5s ease-in"
                });
            }, {

                offset: width2
            });


        } 

    });

})(jQuery);