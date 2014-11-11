<script type="text/javascript">// <![CDATA[
jQuery(document).ready(function(){
        var images = ["/images/ward-davis/backgrounds/carrier.jpg",
                      "/images/ward-davis/backgrounds/data-center2-1920.jpg",
                      "/images/ward-davis/backgrounds/datacom-1920.jpg",
                      "/images/ward-davis/backgrounds/fighter-f18-1920.jpg",
                      "/images/ward-davis/backgrounds/mobile-tech-1920.jpg",
                      "/images/ward-davis/backgrounds/radio-telescopes-1920.jpg",
                      "/images/ward-davis/backgrounds/wind-turbine-1920.jpg"];

        var randomImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";

        // alert(randomImage);

        jQuery('#rt-page-surround').css("background-image", randomImage);
    });
// ]]></script>