(function( window, document, $, Modernizr ){

  var transformProp = Modernizr.prefixed('transform');
   
  // SpaceLaunch constructor
  function SpaceLaunch() {
    // properties
    this.scrolled = 0;
    this.distance3d = 800000;
    
    // cache some jQuery objects
    this.$window = $(window);
    this.$document = $(document);
    
    // bind constructor to window.scroll event
    window.addEventListener( 'scroll', this, false);
  }
  
  // enables constructor to be used within event listener
  // like obj.addEventListener( eventName, this, false )
  SpaceLaunch.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };
  
  SpaceLaunch.prototype.scroll = function( event ) {
    // normalize scroll value from 0 to 1
    this.scrolled = this.$window.scrollTop() / ( this.$document.height() - this.$window.height() );
    this.transformScroll( this.scrolled );
  };

  // apply transform to content based on scroll position
  SpaceLaunch.prototype.transformScroll = function( scroll ) {
    var style = {};
    style[ transformProp ] = 'translate3d( 0,' + ( scroll * this.distance3d ) + 'px, 0 )';
    this.$content.css( style );
  };
  
  // $(function(){
  //   var env = new SpaceLaunch();
  //   env.$content = $('#content');
  // });

})( window, window.document, window.jQuery, window.Modernizr );