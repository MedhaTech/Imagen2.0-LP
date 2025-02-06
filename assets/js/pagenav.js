(function($, window, document, undefined){

    var OnePageNav = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 1500,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            
            if(this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }

            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindScroll();
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
            return this;
        },

        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function() {
            var self = this;
            self.sections = {}; 
            self.$nav.each(function() {
                var linkHref = self.getHash($(this));
                var $target = $('#' + linkHref);
                if($target.length) {
                    self.sections[linkHref] = Math.round($target.offset().top);
                }
            });
        },

        handleClick: function(e) {
            e.preventDefault();
            var self = this;
            var $link = $(e.currentTarget);
            var target = '#' + self.getHash($link);
            
            self.scrollTo(target, function() {
                if(self.config.changeHash) {
                    history.pushState(null, null, target);
                }
                if(self.config.end) {
                    self.config.end();
                }
            });
        },

        scrollTo: function(target, callback) {
            var offset = $(target).offset().top - 70;
            $('html, body').stop().animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },

        bindScroll: function() {
            var self = this;
            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });
            
            setInterval(function() {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }
            }, 250);
        },

        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            
            if(position) {
                this.$elem.find('.' + this.config.currentClass).removeClass(this.config.currentClass);
                this.$elem.find('a[href$="#' + position + '"]').parent().addClass(this.config.currentClass);
            }
        },

        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            
            for(var section in this.sections) {
                if((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }
            return returnValue;
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };

})( jQuery, window, document );
