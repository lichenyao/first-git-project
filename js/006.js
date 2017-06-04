/**
 * Created by ³¿Ñþ on 2017/4/8.
 */
/**
 * @description javascript for 10years about module
 * @author TuzK1ss
 * @date 15/10/19.
 */

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.tyAbout = factory();
        root.tyAbout();
    }

})(this, function () {
    'use strict';

    var activate = ('crateTouch' in document) ? 'tap' : 'click';

    /**
     * 10years about module - tyAbout
     *
     * @object  tyAbout
     */
    var tyAbout = {

        /**
         * initialize tyAbout
         *
         * @method init
         */
        init: function () {
            console.log('ty about init...');

            this.jobDetailHandler()
                .jobDetailCloseHandler()
                .shareTitleHandler()
                .initSlider();


            //var _$index = $('#ty_about_index');
            //
            //$('#ty_about_index_video')
            //    .height(_$index.height())
            //    .width(_$index.width());

            window.onscroll = this.scrollHandler;
        },

        /**
         * initialize team member container
         *
         * @method initTeamMember
         * @returns {tyAbout}
         */
        initTeamMember :function() {

            var $container = $('#ty_about_team_container'),
                len = window.tyTeamMember.length,
                member;

            window.intervalCount = 0;
            window.memberHtml = [];

            for (var i = 0; i < len; i ++) {
                member = window.tySortedTeamMember[i];

                window.memberHtml.push('<div class="ty-about-team-member  ty-about-team-member-style-' + i +'" > <a class="ty-about-team-member-circle" href="javascript:void(0)" style="background-image:url(' + member.avatar + ')"></a><div class="ty-about-team-member-info"><h3>' + member.name + '<small>' + member.desc + '</small></h3><p>' + member.dream + '</p></div></div>');
            }

            /**
             * set interval to append team member, delay 350ms
             * @type {number}
             */
            window.TY_ABOUT_APPEND_TEAM_MEMBER_INTERVAL = setInterval(function () {
                $container.append(window.memberHtml[window.intervalCount]);
                window.intervalCount ++ ;

                if (window.intervalCount === len - 1) {
                    window.clearInterval(window.TY_ABOUT_APPEND_TEAM_MEMBER_INTERVAL);
                }
            }, 350);

            return this;
        } ,

        /**
         * binding job detail tap or click events
         *
         * @method jobDetailHandler
         * @returns {tyAbout}
         */
        jobDetailHandler : function () {
            $('.ty-about-job').on(activate, function () {
                $(this).addClass('ty-active');
            });

            return this;
        },

        /**
         * binding job detail close tap or click events
         *
         * @method jobDetailCloseHandler
         * @returns {tyAbout}
         */
        jobDetailCloseHandler : function () {
            $('.ty-about-job-close').on(activate, function () {
                $(this).parent().parent().removeClass('ty-active');

                return false;
            });

            return this;
        },

        /**
         * binding share title tap or click events
         *
         * @method shareTitleHandler
         * @returns {tyAbout}
         */
        shareTitleHandler : function () {
            var $content = $('#ty_about_share_content'),
                $detail = $content.find('.ty-about-share-content-detail'),
                $this,
                index,
                i;

            $('#ty_about_share_title').find('a').on(activate, function () {
                $this = $(this);

                if (!$this.hasClass('ty-active')) {
                    index = parseInt($this.attr('data-index'));

                    $('#ty_about_share_title').find('.ty-active').removeClass('ty-active');

                    $this.addClass('ty-active');

                    $content.find('.ty-active').removeClass('ty-active');
                    $detail.eq(index).addClass('ty-active');

                    for (i = 1; i < 5; i ++) {
                        $content.removeClass('ty-about-share-after-' + i);
                    }

                    $content.addClass('ty-about-share-after-' + index);
                } else {
                    $this.removeClass('ty-active');
                    $content.find('.ty-active').removeClass('ty-active');
                    $detail.eq(0).addClass('ty-active');

                    for (i = 1; i < 5; i ++) {
                        $content.removeClass('ty-about-share-after-' + i);
                    }
                }

            });

            return this;
        },

        /**
         * init report slider
         *
         * @method initSlider
         * @returns {tyAbout}
         */
        initSlider: function () {
            var $slider = $('#ty_about_report_slider'),
                $slide = $slider.find('.ty-about-report-slide'),
                len = $slide.length,
                that = this;


            $slide.clone(true).appendTo($slider);
            $slide.clone(true).appendTo($slider);

            window.IS_SLIDE_MOVING = false;


            this.activeSlide(len, len, 0);

            this.bindSlideClickHandler(len);

            $('#ty_about_report_nav_prev').on(activate, function () {
                that.slideMove(len, -1);
            });

            $('#ty_about_report_nav_next').on(activate, function () {
                that.slideMove(len);
            });


            window.INTERVAL_MOVING = setInterval(function (){
                if (!window.IS_SLIDE_MOVING) {
                    that.slideMove(len);
                }
            }, 6000);


            return this;
        },

        /**
         * binding slide tap or click events
         *
         * @method bindSlideClickHandler
         * @param {Number} len
         */
        bindSlideClickHandler : function (len) {
            var that = this,
                $slider = $('#ty_about_report_slider'),
                $slide = $slider.find('.ty-about-report-slide'),
                $this,
                index;

            $slide.on(activate, function () {
                $this = $(this);
                if (!$this.hasClass('ty-active')) {
                    index = $this.index();
                    that.activeSlide(len, index);
                }
            });

        },

        /**
         * active slide function
         *
         * @method activeSlide
         * @param {Number} len
         * @param {Number} index
         * @param {Number} duration
         */
        activeSlide : function (len, index, duration){

            if (!window.IS_SLIDE_MOVING) {

                window.IS_SLIDE_MOVING = true;

                var $slider = $('#ty_about_report_slider'),
                    $slide = $slider.find('.ty-about-report-slide');

                duration = duration || 400;

                $slider.find('.ty-active').removeClass('ty-active');
                $slide.eq(index).addClass('ty-active');

                $slider.animate({'-webkit-transform': 'translateX(-' + 240 * index  + 'px)'}, duration);
                $slider.animate({'transform': 'translateX(-' + 240 * index  + 'px)'}, duration);

                window.IS_SLIDE_MOVING = false;

                //console.log( window.IS_SLIDE_MOVING, new Date());

                if (index > 2 * len || index < len) {

                    window.IS_SLIDE_MOVING = true;

                    var $pastSlide = $slider.find('.ty-active'),
                        $currentSlide ;

                    //console.log(index, len, new Date());

                    if (index > 2 * len ){
                        index = index - len;
                    } else if (index < len) {
                        index = index + len;
                    }

                    $currentSlide =  $slide.eq(index);

                    setTimeout(function () {
                        $pastSlide.addClass('ty-no-transition').removeClass('ty-active');
                        $currentSlide.addClass('ty-no-transition').addClass('ty-active');

                        setTimeout(function () {
                            $pastSlide.removeClass('ty-no-transition');
                            $currentSlide.removeClass('ty-no-transition');
                        }, 50);

                        $slider.animate({'-webkit-transform': 'translateX(-' + 240 * index  + 'px)'}, 0);
                        $slider.animate({'transform': 'translateX(-' + 240 * index  + 'px)'}, 0);
                        window.IS_SLIDE_MOVING = false;

                    }, 810);
                }

            }

        },

        /**
         * slide move function
         *
         * @method slideMove
         * @param {Number} len
         * @param {Number} type  (prev or next)
         */
        slideMove : function (len, type) {
            var $activeSlide = $('#ty_about_report_slider').find('.ty-active'),
                index = $activeSlide.index(),
                that = this;

            type = type || 1;

            if (type === 1) {
                that.activeSlide(len, index + 1);
            } else {
                that.activeSlide(len, index - 1);
            }
        },

        /**
         * lazy initialize team member container
         *
         * @method scrollHandler
         * @returns {tyAbout}
         */
        scrollHandler : function () {
            var top = document.body.scrollTop || document.documentElement.scrollTop,
                screenHeight = $('body').height();

            if (top > screenHeight - 300) {
                var $team = $('.ty-about-section.team');

                if (!$team.hasClass('ty-loaded')) {
                    tyAbout.initTeamMember();
                    $team.addClass('ty-loaded');
                }
            }

            return this;
        }
    };


    /**
     * return tyAbout.init()
     */
    return function () {
        tyAbout.init();
    };

});