/**
 * Created by weibin on 2017/3/6.
 */

(function (ns,$) {

    /* webcontext */
    var vendorPath = '../asserts/plugins/';
    // var vendorPath = 'D:/gitrepo/swelljs/lib/plugins/';
    require.config({
        // urlArgs:'v='+ (new Date()).getTime(),
        baseUrl: vendorPath,
        waitSeconds: 60,
        map: {
            '*': {
                'css': vendorPath+'require/css.min.js',
                'normalize': vendorPath+'require/normalize.js'

            }
        },
        paths:{
            underscore :"underscore/underscore-min",
            holder: "holder/holder",
            'jquery':  "jQuery-2.2.0.min",
            'bootstrap': "bootstrap/js/bootstrap.min",
            "bootstrap-hover-dropdown":"bootstrap-hover-dropdown/bootstrap-hover-dropdown.min",
            'jquery-slimscroll' : "jquery-slimscroll/jquery.slimscroll.min",
            'jquery-blockui' : "jquery.blockui.min",
            'uniform' : "uniform/jquery.uniform.min",
            'bootstrap-switch' : "bootstrap-switch/js/bootstrap-switch.min",


            'jquery-ui' : "jquery-ui/jquery-ui.min",
            'jquery-form' : "jquery-form/jquery.form",
            'jquery-validate' : "jquery-validation/jquery.validate.min",
            'jquery-metadata' : "jquery-validation/jquery.metadata",
            'swell-validate' : "swell/jQ_validate",

            "jquery.bootstrap-growl" :"bootstrap-growl/jquery.bootstrap-growl.min",

            'jquery-notific' : "jquery-notific8/jquery.notific8.min",
            'ui-notific' : "../../demo/js/ui-notific8",
            'jstree' : "jstree/dist/jstree",

            'bootstrap-modal' : "bootstrap-modal/js/bootstrap-modal",
            'bootstrap-modalmanager' : "bootstrap-modal/js/bootstrap-modalmanager",

            //time picker
            'bootstrap-datepicker' : "bootstrap-datepicker/js/bootstrap-datepicker.min",
            'bootstrap-daterangepicker' : "bootstrap-daterangepicker/daterangepicker",
            'moment' : "bootstrap-daterangepicker/moment.min",
            'bootstrap-datetimepicker' : "bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
            'bootstrap-timepicker' : "bootstrap-timepicker/js/bootstrap-timepicker.min",
            'clockface' : "clockface/js/clockface",

            'bootstrap-fileinput' : "bootstrap-fileinput/bootstrap-fileinput",

            'jquery.fancybox' : "fancybox/source/jquery.fancybox.pack",
            'jquery.ui.widget' : "jquery-file-upload/js/vendor/jquery.ui.widget",
            'tmpl' : "jquery-file-upload/js/vendor/tmpl.min",
            'load-image' : "jquery-file-upload/js/vendor/load-image.min",
            'load-image-meta' : "jquery-file-upload/js/vendor/load-image-meta",
            'load-image-exif' : "jquery-file-upload/js/vendor/load-image-exif",
            'canvas-to-blob' : "jquery-file-upload/js/vendor/canvas-to-blob.min",
            'jquery.blueimp-gallery' : "jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min",
            'blueimp-helper' : "jquery-file-upload/blueimp-gallery/blueimp-helper",

            //
            // 'load-image-meta': '/Content/jQueryFileUpload/js/load-image-meta',
            // 'load-image-exif': ['/Content/jQueryFileUpload/js/load-image-meta', '/Content/jQueryFileUpload/js/load-image-exif'],
            // 'load-image-ios': '/Content/jQueryFileUpload/js/load-image-ios',

            'jquery.iframe-transport' : "jquery-file-upload/js/jquery.iframe-transport",
            'jquery.fileupload' : "jquery-file-upload/js/jquery.fileupload",
            'jquery.fileupload-process' : "jquery-file-upload/js/jquery.fileupload-process",
            'jquery.fileupload-image' : "jquery-file-upload/js/jquery.fileupload-image",
            'jquery.fileupload-audio' : "jquery-file-upload/js/jquery.fileupload-audio",
            'jquery.fileupload-video' : "jquery-file-upload/js/jquery.fileupload-video",
            'jquery.fileupload-validate' : "jquery-file-upload/js/jquery.fileupload-validate",
            'jquery.fileupload-ui' : "jquery-file-upload/js/jquery.fileupload-ui",
            'jquery.fileupload-jquery-ui': "jquery-file-upload/js/jquery.fileupload-jquery-ui",

            'bootboxjs': "bootbox/bootbox.min",

            'swell' : "../layouts/swell",
            'quick-sidebar' : "../layouts/quick-sidebar",
            'dashboard' : "../layouts/layout/scripts/dashboard",
            'demo' : "../layouts/layout/scripts/demo",
            'layout' : "../layouts/layout/scripts/layout",


            mmgrid :  ["mmgrid/mmGrid"],
            mmPagin :  ["mmgrid/mmPaginator"]

        },

        shim : {
            'jquery':{exports:'$'},
            'bootstrap':{deps:['jquery']},
            "underscore": {
                exports: '_'
            },

            'jquery-ui': {
                deps: [
                    // 'css!../plugins/jquery-ui/jquery-ui.min.css',
                    //  'css!../plugins/jquery-ui/jquery-ui.theme.min.css'
                ]
            },
            'jquery-form': {
                deps: [ 'jquery-validate','jquery-metadata','swell-validate']
            },
            'mmgrid': {
                deps: [
                    'css!../plugins/mmgrid/mmGrid.css'
                ]

            },

            'mmPagin': {
                deps: [
                    'mmgrid',
                    'css!../plugins/mmgrid/mmPaginator.css'
                ]

            },
            'bootstrap-hover-dropdown':{deps:['bootstrap']},
            'jquery-slimscroll':['bootstrap-hover-dropdown'],
            'jquery-blockui' : ['jquery-slimscroll'],
            'uniform' : {deps:['jquery-blockui',"css!../plugins/uniform/css/uniform.default.min.css"]},
            'bootstrap-switch': {deps:['uniform',"css!../plugins/bootstrap-switch/css/bootstrap-switch.min.css"]},

            'swell':{deps:['bootstrap-switch']},
            'demo' :{deps:['swell']},
            'dashboard' :{deps:['swell']},
            'quick-sidebar' :{deps:['swell']},
            'layout': {
                deps:['quick-sidebar','demo']
            },

            'jquery.bootstrap-growl':{deps:["bootstrap-switch"]},

            'jquery-notific':{deps:['bootstrap','css!jquery-notific8/jquery.notific8.min.css']},
            'jstree':{deps:['bootstrap','css!../plugins/jstree/dist/themes/default/style.min.css']},

            'bootboxjs' : {exports: 'bootbox',deps:['swell']},

            'bootstrap-daterangepicker' : {deps: ['css!../plugins/bootstrap-daterangepicker/daterangepicker.min.css']},
            'bootstrap-datepicker' : {deps: ['css!../plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css']},
            'bootstrap-datetimepicker' : {deps: ['css!../plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css']},
            'bootstrap-timepicker' : {deps: ['css!../plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css']},
            'clockface' : {deps: ['bootstrap','moment','bootstrap-daterangepicker','bootstrap-datepicker','bootstrap-timepicker','bootstrap-datetimepicker','css!../plugins/clockface/css/clockface.css']},

            'bootstrap-modal':{deps:['bootstrap-modalmanager','css!../plugins/bootstrap-modal/css/bootstrap-modal.css','css!../plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css']},

            'bootstrap-fileinput':{deps:['bootstrap','css!bootstrap-fileinput.css']},

            'jquery.ui.widget':["jquery"],
            'jquery.blueimp-gallery':{deps:['blueimp-helper','css!../plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css']},
            'jquery.fancybox':{deps:['css!../plugins/fancybox/source/jquery.fancybox.css']},
            'jquery.fileupload':{deps:['css!../plugins/jquery-file-upload/css/jquery.fileupload.css']},
            'jquery.fileupload-ui':{deps:['jquery.fancybox','jquery.ui.widget','tmpl','load-image','jquery.blueimp-gallery','canvas-to-blob','jquery.iframe-transport','jquery.fileupload','css!../plugins/jquery-file-upload/css/jquery.fileupload-ui.css']}

        }


    });

    var isArray = function(value) {
        return value &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            typeof value.splice === 'function' &&
            !(value.propertyIsEnumerable('length'));
    };



    ns.require = function (modules,callback) {

        if(typeof modules === 'function'){
            console.log("module is a function ...");
            require([],modules(ns));
            return false;
        }
        if(isArray(modules)) {
            console.log("module is a arrays ...");
            require(modules, callback);
        }
    };

    //for test

    ns.test = function (items) {
        console.log(items.test);
    }

})(swell);