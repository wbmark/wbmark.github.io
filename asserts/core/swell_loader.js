/**
 * Created by weibin on 2017/3/6.
 */

(function (ns,$) {

    /* webcontext */
    var vendorPath = '../asserts/plugins/';
    // var vendorPath = 'D:/gitrepo/swelljs/lib/plugins/';
    require.config({
        baseUrl:vendorPath,
        map: {
            '*': {
                'css': vendorPath+'require/css.min.js',
                'normalize': vendorPath+'require/normalize.js'
            }
        },
        paths:{
            jquery:  "jQuery-2.2.0.min",
            underscore :"underscore/underscore-min",
            holder: "holder/holder",
            'bootstrap' : "bootstrap/js/bootstrap.min",
            'jquery-ui' : "jquery-ui/jquery-ui.min",
            'jquery-form' : "jquery-form/jquery.form",
            'jquery-validate' : "jquery-validation/jquery.validate.min",
            'jquery-metadata' : "jquery-validation/jquery.metadata",
            'swell-validate' : "swell/jQ_validate",
            'jquery-slimscroll' : "jquery-slimscroll/jquery.slimscroll.min",
            'jquery-notific' : "jquery-notific8/jquery.notific8.min",
            'ui-notific' : "../../demo/js/ui-notific8",
            'jquery_jstree' : "jstree/dist/jstree.min",

            'bootstrap-modal' : "bootstrap-modal/js/bootstrap-modal",
            'bootstrap-modalmanager' : "bootstrap-modal/js/bootstrap-modalmanager",

            //time picker
            'bootstrap-datepicker' : "bootstrap-datepicker/js/bootstrap-datepicker.min",
            'bootstrap-daterangepicker' : "bootstrap-daterangepicker/daterangepicker",
            'moment' : "bootstrap-daterangepicker/moment.min",
            'bootstrap-datetimepicker' : "bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
            'bootstrap-timepicker' : "bootstrap-timepicker/js/bootstrap-timepicker.min",
            'clockface' : "clockface/js/clockface",

            'swell' : "../layouts/swell",
            'quick-sidebar' : "../layouts/quick-sidebar",
            'dashboard' : "../layouts/layout/scripts/dashboard",
            'demo' : "../layouts/layout/scripts/demo",
            'layout' : "../layouts/layout/scripts/layout",


            mmgrid :  ["mmgrid/mmGrid"],
            mmPagin :  ["mmgrid/mmPaginator"]

        },

        shim : {
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
            'swell':{deps:['bootstrap','jquery-slimscroll']},
            'demo' :{deps:['swell']},
            'dashboard' :{deps:['swell']},
            'quick-sidebar' :{deps:['swell']},
            'layout': {
                deps:['quick-sidebar','dashboard','demo']
            },
            'jquery-notific':{deps:['css!jquery-notific8/jquery.notific8.min.css']},
            'jquery_jstree':{deps:['css!jstree/dist/themes/default/style.css']},

            'bootstrap-daterangepicker' : {deps: ['css!../plugins/bootstrap-daterangepicker/daterangepicker.min.css']},
            'bootstrap-datepicker' : {deps: ['css!../plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css']},
            'bootstrap-datetimepicker' : {deps: ['css!../plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker3.min.css']},
            'bootstrap-timepicker' : {deps: ['css!../plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css']},
            'clockface' : {deps: ['bootstrap','moment','bootstrap-daterangepicker','bootstrap-datepicker','bootstrap-timepicker','bootstrap-datetimepicker','css!../plugins/clockface/css/clockface.css']},

            'bootstrap-modal':{deps:['bootstrap-modalmanager','css!../plugins/bootstrap-modal/css/bootstrap-modal.css','css!../plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css']}
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